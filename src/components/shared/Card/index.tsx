// node_modules
import { LegacyRef, forwardRef } from "react";
import Image from "next/image";
// components
import Typography from "../Typography";
// types
import { ICardProps } from "./types";
// utils
import { priceFormatter } from "@/utils";
// strings
import { words } from "@/strings";
// styles
import colors from "../../../theme/colors.module.scss";
import styles from "./card.module.scss";

const Card = forwardRef(function Card(
  props: ICardProps,
  ref: LegacyRef<HTMLElement>
) {
  const {
    coverImage,
    rating,
    restaurantLogo,
    restaurantTitle,
    description,
    deliveryPrice,
  } = props;
  return (
    <article className={styles.card} ref={ref}>
      <header className={styles.card__header}>
        <Image
          className={styles.card_cover}
          src={coverImage}
          layout="fill"
          alt="cover image"
          loading="eager"
          onError={() => console.log("The image did not load correctly")}
        />
        <div className={styles.card__logo}>
          <Image
            src={restaurantLogo}
            alt={restaurantTitle}
            width={56}
            height={56}
          />
        </div>
      </header>
      <footer className={styles.card__footer}>
        <div className={styles.card__details}>
          <Typography tag="h3" color={colors.primaryColor}>
            {restaurantTitle}
          </Typography>
          <Typography
            tag="span"
            color={colors.starcolorDefault}
            className={styles.card__rating}
          >
            {rating}
          </Typography>
        </div>
        <Typography
          className={styles.card__description}
          tag="div"
          color={colors.textColor}
        >
          {description}
        </Typography>
        <div className={styles.card__delivery}>
          <Typography tag="span" color={colors.textColorLight}>
            {words.courierSeller}
          </Typography>
          <Typography tag="span" color={colors.textColor}>
            {priceFormatter(deliveryPrice)} {words.priceUnit}
          </Typography>
        </div>
      </footer>
    </article>
  );
});

export default Card;
