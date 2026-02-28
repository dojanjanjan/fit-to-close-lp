import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  try {
    // Notification to FTC team
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Societe Bangkok'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.MAIL_USER,
      subject: `[FTC] New Contact Message from ${name}`,
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 40px; max-width: 600px;">
          <h2 style="color: #C8FF00; text-transform: uppercase; letter-spacing: 0.2em;">New Contact Message</h2>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="color: #ccc; background: #111; padding: 16px; border-left: 2px solid #C8FF00;">${message.replace(/\n/g, '<br/>')}</p>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p style="color: #666; font-size: 11px;">Received via fit-to-close.com contact form</p>
        </div>
      `,
    })

    // Confirmation to user
    await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME || 'Societe Bangkok'}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: 'FIT TO CLOSE — Message Received',
      html: `
        <div style="font-family: monospace; background: #000; color: #fff; padding: 40px; max-width: 600px;">
          <h2 style="color: #C8FF00; text-transform: uppercase; letter-spacing: 0.2em;">Message Received</h2>
          <hr style="border-color: #333; margin: 20px 0;" />
          <p>Hey ${name},</p>
          <p>Thanks for reaching out. We've received your message and will get back to you within 24 hours.</p>
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
