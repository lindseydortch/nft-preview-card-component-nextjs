import styles from "@/app/_ui/cardContent/cardContent.module.scss";
import CardUser from "@/app/_ui/cardUser/CardUser";
import Image from "next/image";

function CardContent() {
  return (
    <div>
      <div className={styles.overview}>
        <div className={styles.overviewText}>
          <h1 className={styles.name}>Equilibrium #3429</h1>
          <p className={styles.description}>
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={[styles.iconContainer, styles.coin].join(" ")}>
              <Image
                src="/images/icon-ethereum.svg"
                alt="coin icon"
                fill
                priority
              />
            </div>
            <p className={styles.price}>0.041 ETH</p>
          </div>
          <div className={styles.info}>
            <div className={[styles.iconContainer, styles.clock].join(" ")}>
              <Image
                src="/images/icon-clock.svg"
                alt="coin icon"
                fill
                priority
                sizes="auto"
              />
            </div>
            <p className={styles.time}>3 days left</p>
          </div>
        </div>
      </div>
      <CardUser />
    </div>
  );
}

export default CardContent;
