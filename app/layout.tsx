import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FIT TO CLOSE | 5H Performance Masterclass Bangkok',
  description: 'The 5H Performance Masterclass for high-stakes closers & sales leaders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
