import { Montserrat, Lalezar } from 'next/font/google' // next 3ndha librairie dyl lfonts dyl google integré dyalha
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer' // '@' : cette notation represente le dossier root qui est le dossier "src" bach manb9awch ntmEèno nketbo chemin bhal haka "../../compo.."
import { ThemeProvider } from '../Context/ThemeContext'

const bodyFont = Montserrat({ subsets: ['latin'], weight: ['400', '600'] })
// const lalezar = Lalezar({ subsets: ['arabic'], weight: ['400'] })

export const metadata = {
  title: 'Hexashop',
  description: 'Discover a word of endless shopping possibilities at our online store. Browse, shoose, and order your favorite products from the comfort of your home.',
}

// cce file represente le file main ou index çàd le file principale
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        {/* <h1 className={lalezar.className}>اسامة اسفيري</h1> */}
        
        <ThemeProvider>
          <div className="container">
            <Navbar/>
            {children} {/*represente tout les pages qu'on a dans notre project pour chaque route une page ou componenet sera rendrer ici*/}
            <Footer/>
          </div>
        </ThemeProvider>

      </body>
    </html>
  )
}
