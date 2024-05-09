import { Comfortaa } from 'next/font/google'
import { Gabarito } from 'next/font/google'
import './globals.css'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})
const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
})

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.variable + ' ' + gabarito.variable}>
        {children}
      </body>
    </html>
  )
}