import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { supabase } from '@/lib/supabase'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT_SMTP) || 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export async function POST(req: NextRequest) {
  const { name, email, mobile, lineId, instagram, package: pkg } = await req.json()

  if (!name || !email || !mobile) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Save to Supabase
    const { error: dbError } = await supabase
      .from('ftc_bookings')
      .insert([
        {
          full_name: name,
          email: email,
          mobile: mobile,
          line_id: lineId || null,
          instagram: instagram || null,
          package: pkg || 'standard',
          status: 'pending'
        }
      ])

    if (dbError) {
      console.error('Supabase error:', dbError)
    }

    // Notification to FTC team
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Societe Bangkok'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_USER,
      subject: `[FTC] New Booking Registration — ${name}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 40px; max-width: 600px;">
          <h2 style="color: #C8FF00; text-transform: uppercase; letter-spacing: 0.2em;">🎯 New Booking</h2>
          <hr style="border-color: #333; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666;">Name</td><td style="padding: 8px 0; color: #fff;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0; color: #C8FF00;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Mobile</td><td style="padding: 8px 0; color: #fff;">${mobile}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Line ID</td><td style="padding: 8px 0; color: #fff;">${lineId || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Instagram</td><td style="padding: 8px 0; color: #fff;">${instagram || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Package</td><td style="padding: 8px 0; color: #C8FF00; text-transform: uppercase;">${pkg || 'standard'}</td></tr>
          </table>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p style="color: #666; font-size: 11px;">Received via fit-to-close.com booking form</p>
        </div>
      `,
    })

    // Confirmation to user
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Societe Bangkok'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: 'FIT TO CLOSE — Registration Confirmed',
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 40px; max-width: 600px;">
          <h2 style="color: #C8FF00; text-transform: uppercase; letter-spacing: 0.2em;">Registration Confirmed ✓</h2>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p>Hey ${name},</p>
          <p>Your registration for the <strong style="color: #C8FF00;">FIT TO CLOSE Bangkok Masterclass</strong> has been received.</p>
          <p>We'll be in touch shortly with all details about location, time, and what to bring.</p>
          <div style="background: #111; border-left: 3px solid #C8FF00; padding: 20px; margin: 24px 0;">
            <p style="margin: 0; color: #C8FF00; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em;">What's next?</p>
            <p style="margin: 8px 0 0; color: #ccc; font-size: 13px;">Our team will contact you via email or mobile within 24 hours to confirm your spot and process payment.</p>
          </div>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p style="color: #C8FF00; text-transform: uppercase; font-size: 11px; letter-spacing: 0.3em;">LEAVE STRONGER. CLOSE FASTER. START MONDAY.</p>
          <p style="color: #666; font-size: 11px; margin-top: 20px;">FIT TO CLOSE Bangkok — <a href="mailto:bkk@societe-bangkok.com" style="color: #C8FF00;">bkk@societe-bangkok.com</a></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
