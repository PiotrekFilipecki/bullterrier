import './globals.scss'
import { Oswald } from 'next/font/google'
import AnimateLayout from '../../components/Presence'
import Header from '../../components/Header'


const inter = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Bullterier Tattoo Shop',
  description: 'Wyjątkowe studio tatuażu w Krakowie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Header />
        <AnimateLayout>
       
        {children}
        </AnimateLayout>
        </body>
    </html>
  )
}
