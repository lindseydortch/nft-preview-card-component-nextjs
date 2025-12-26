import styles from "@/app/_ui/cardImage/cardImage.module.scss";
import Image from "next/image";

function CardImage() {
  return (
    <div className={styles.imgContainer}>
      <Image
        src="/images/image-equilibrium.jpg"
        alt="image of coin"
        priority
        fill
      />
      <div className={styles.overlay}>&nbsp;</div>
      <div className={styles.hoverImg}>
        <Image src="/images/icon-view.svg" alt="image of coin" priority fill />
      </div>
    </div>
  );
}

export default CardImage;
