import styles from "@/app/_ui/cardUser/cardUser.module.scss";
import Image from "next/image";

function CardUser() {
  return (
    <div className={styles.userContainer}>
      <div className={styles.imgContainer}>
        <Image
          src="/images/image-avatar.png"
          alt="Image of Jules Wyvern"
          priority
          fill
          sizes="auto"
        />
      </div>
      <h2>
        Creation of <span>Jules Wyvern</span>
      </h2>
    </div>
  );
}

export default CardUser;
