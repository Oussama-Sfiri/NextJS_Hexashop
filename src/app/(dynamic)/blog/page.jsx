import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: 'Hexashop - Blog',
  description: 'Discover a word of endless shopping possibilities at our online store. Browse, shoose, and order your favorite products from the comfort of your home.',
}

function Blog() {
    return (
      <div className={styles.mainContainer}>

          <Link href="/blog/id" className={styles.post}>

              <Image
                className={styles.image}
                src={"https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg"} // ici next maki9belch les images li kikouno jayin mn chi site akhor donc la solution hia nmchiw ndiro cofiguration l next fl file "next.config.js" bach iwelli i9belhom çàd ghadi nweriwh domaine name mnin ghadin nwliw njibo had les images et on redemmare le serveur
                width={350}
                height={250}
                alt="post image"
              />
            
            <div className={styles.content}>
              <h1 className={styles.title}>Post Title</h1>
              <p className={styles.text}>Post Text</p>
            </div>
          </Link>
          
          <Link href="/blog/id" className={styles.post}>

              <Image
                className={styles.image}
                src={"https://images.pexels.com/photos/2816903/pexels-photo-2816903.jpeg"} // ici next maki9belch les images li kikouno jayin mn chi site akhor donc la solution hia nmchiw ndiro cofiguration l next fl file "next.config.js" bach iwelli i9belhom çàd ghadi nweriwh domaine name mnin ghadin nwliw njibo had les images et on redemmare le serveur
                width={350}
                height={250}
                alt="post image"
              />

            <div className={styles.content}>
              <h1 className={styles.title}>Post Title</h1>
              <p className={styles.text}>Post Text</p>
            </div>
          </Link>

          <Link href="/blog/id" className={styles.post}>

              <Image
                className={styles.image}
                src={"https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg"} // ici next maki9belch les images li kikouno jayin mn chi site akhor donc la solution hia nmchiw ndiro cofiguration l next fl file "next.config.js" bach iwelli i9belhom çàd ghadi nweriwh domaine name mnin ghadin nwliw njibo had les images et on redemmare le serveur
                width={350}
                height={250}
                alt="post image"
              />

            <div className={styles.content}>
              <h1 className={styles.title}>Post Title</h1>
              <p className={styles.text}>Post Text</p>
            </div>
          </Link>
      </div>
    );
  };
  
  export default Blog;