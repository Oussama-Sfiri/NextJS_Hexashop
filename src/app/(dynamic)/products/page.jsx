import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch('https://dummyjson.com/products');
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
};

export const metadata = {
  title: 'Hexashop - Products',
  description: 'Discover a word of endless shopping possibilities at our online store. Browse, shoose, and order your favorite products from the comfort of your home.',
}

async function Products() {
  const data = await getData();
  const products = data.products;
  //console.log(products); // cette data ne va pas s'aficher dans le console mais il va s'afficher dans le terminal du serveur car cette component est une server component

  return (
    <div className={styles.mainContainer}>
      {products.map(((product) => {
          return(
            <Link href={`/products/${product.id}`} className={styles.post} key={product.id}>

              <Image
                className={styles.image}
                src={product.thumbnail} // ici next maki9belch les images li kikouno jayin mn chi site akhor donc la solution hia nmchiw ndiro cofiguration l next fl file "next.config.js" bach iwelli i9belhom çàd ghadi nweriwh domaine name mnin ghadin nwliw njibo had les images et on redemmare le serveur
                width={350}
                height={250}
                alt="product image"
              />
              
              <div className={styles.content}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.text}>{product.description}</p>
                <p className={styles.category}>Category: {product.category}</p>
                <span className={styles.price}>Price: {product.price}$</span>
              </div>
            </Link>
          );
      }))}
    </div>
  );
};

export default Products;