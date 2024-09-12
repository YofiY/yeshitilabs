import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YeshitiLabs - Web3 Consulting',
  description: 'Leading web3 consulting firm helping businesses navigate the decentralized future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500`}>
        <div className="fixed w-full z-10 flex justify-center p-4">
          <nav className="bg-white bg-opacity-10 backdrop-blur-lg rounded-full px-6 py-2">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="YeshitiLabs Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
              </Link>
              <div className="space-x-6">
                <Link href="/research" className="text-white hover:text-gray-300 transition duration-300">Research</Link>
                <Link href="/consulting" className="text-white hover:text-gray-300 transition duration-300">Consulting</Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">About Us</Link>
              </div>
            </div>
          </nav>
        </div>
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
