import Image from "next/image";
import styles from "./Footer.module.css";
import { social_media } from "./data";

function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy;2023 Hexashop. All rights reserved</div>
      <div className={styles.social}>
        {social_media.map((media) => 
          <Image //applique le principe de "Lazy Loading"
            key={media.id}
            src={`/images/icons/${media.media}.png`}
            width={20} // il est obligatoire ici de donner un width et un height pour l'image
            height={20}
            className={styles.icon}
            alt={`Hexashop ${media.media} link`}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;