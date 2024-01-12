import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qasim Saeed | MERN Full Stack Developer ',
  description: 'Qasim Saeed - MERN Stack Full Stack Developer. Explore my portfolio for a showcase of innovative web solutions and seamless applications. Passionate about merging creativity with technology to elevate digital experiences',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
