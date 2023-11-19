import Link from "next/link";
import { MedievalSharp } from "next/font/google";
import styles from "./Logo.module.css";

const logoFont = MedievalSharp({ subsets: ['latin'], weight: ['400']})

function Logo() {
  return (
    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>HEXASHOP</Link>
  )
}

export default Logo;