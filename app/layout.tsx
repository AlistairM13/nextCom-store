import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from "@/components/core/footer"
import Navbar from "@/components/core/navbar"
import ModalProvider from "@/providers/modal-provider"
import ToastProvider from "@/providers/toast-provider"

import './globals.css'
import { ThemeProvider } from "@/providers/theme-provider"

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider />
          <ToastProvider />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
