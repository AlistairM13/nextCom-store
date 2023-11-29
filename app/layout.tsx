import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from "@/components/core/footer"
import Navbar from "@/components/core/navbar"

import './globals.css'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyStore',
  description: 'MyStore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
