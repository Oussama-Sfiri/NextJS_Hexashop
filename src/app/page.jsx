import Image from "next/image"
import styles from "./page.module.css"
import Hero from "/public/images/hero.svg"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online Shop Destination!</h1>
        <p className={styles.description}>Discover a word of endless shopping possibilities at our online store. Browse, shoose, and order your favorite products from the comfort of your home.</p>
        <button className={styles.button}>shop Now</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} className={styles.img} alt="HexaShop" /> {/*ici jebna l'image sous forme d'un obkect "Hero" ou dernah f src donc c'est pas la peine bach n3tiw l'image width ou height f lowel hitach next deja 3ref chhal la taile dyl l'image*/}
      </div>
    </div>
  )
}
