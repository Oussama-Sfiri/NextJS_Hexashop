import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
};

export async function generateMetadata({ params }) {
  // fetch data
  const product = await getData(params.id)

  return {
    title: product.title,
    description: product.description
  }
}

async function ProductById({params}) {
  const productById = await getData(params.id);
  // console.log(productById)

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{productById.title}</h1>
          <p className={styles.desc}>{productById.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={productById.thumbnail}
            alt="product image"
            fill={true} // had la propriete katkheli l'image t3emer 2a9reb div fih position:relative dkchi 3lach tle3 lina f lowel 3emrat la page kamla "body" donc ila mabghinach haka khassna n3tiw position relative l div li hia fih bach ikoun howa 2a9rab div fih position:relative ou t3emro howa nit
          />
          <span className={styles.author}>{productById.brand}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {productById.images.map((image) => {
            return(
              <Image
                key={productById.id}
                src={image}
                alt="product image"
                width={200}
                height={200}
              />
            );
          })}
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit adipisci reiciendis dolore accusamus dignissimos sint suscipit animi quod perspiciatis nobis ut commodi eligendi quisquam illum id, nostrum molestias laudantium recusandae! Doloremque nisi ut alias suscipit delectus a, excepturi nulla culpa dolorum quaerat, facere nam cumque consequuntur minima accusantium. Deleniti quae, quisquam quis impedit temporibus provident harum iusto corporis optio ut! Optio sapiente ullam harum quis vero accusamus, minus temporibus ad sit animi necessitatibus pariatur dignissimos nisi incidunt libero, accusantium laborum quod porro enim repudiandae sunt debitis culpa. Dicta alias numquam velit excepturi labore maxime quia hic cum quasi? Commodi, voluptatum libero fugit, aperiam corrupti necessitatibus distinctio ea perferendis eos esse quidem exercitationem, placeat adipisci vero iusto est reprehenderit earum dolores tenetur? Provident eum repellendus expedita rerum consectetur laudantium non, cupiditate a vitae libero pariatur quia temporibus nulla similique incidunt necessitatibus vel tempore ipsam sapiente corrupti eligendi nam culpa nostrum! Necessitatibus dolor quis omnis velit illum nemo praesentium quos debitis consectetur. Obcaecati fugit odio animi aspernatur laboriosam excepturi nesciunt omnis quos incidunt! Odit, corporis. At obcaecati optio iste id quaerat sequi laboriosam a, excepturi ullam maxime voluptate, voluptates provident quisquam sed aspernatur esse omnis voluptatibus molestiae ut, saepe exercitationem. Suscipit aut consectetur id odit aliquid recusandae numquam unde rem. Quaerat ducimus deserunt nihil non harum consequuntur aperiam minus laborum aspernatur cumque distinctio facere facilis quos itaque consectetur quis optio temporibus, ab nesciunt voluptates. Perspiciatis sed tenetur, perferendis eum nam obcaecati, expedita praesentium omnis nisi eaque consectetur est odio sint, ipsa optio illo reiciendis nesciunt enim inventore quia? Magni veniam sed eveniet cum placeat quaerat voluptate quis laborum dolore autem fugit ratione nemo voluptatibus tempora esse numquam culpa soluta, optio, nam repellendus debitis. Eius quod quia sapiente qui perferendis iste corrupti consectetur fugit, a illo. Tenetur est rem commodi veniam ratione. Ex?
        </p>
      </div>

    </div>
  )
}

export default ProductById;