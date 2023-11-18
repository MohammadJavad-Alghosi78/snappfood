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
import "./card.scss";

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
    <article className="card" ref={ref}>
      <header className="card__header">
        <Image
          className="card_cover"
          src={coverImage}
          layout="fill"
          alt="cover image"
          loading="eager"
        />
        <div className="card__logo">
          <Image
            src={restaurantLogo}
            alt={restaurantTitle}
            width={56}
            height={56}
          />
        </div>
      </header>
      <footer className="card__footer">
        <div className="card__details">
          <Typography tag="h3" color={colors.primaryColor}>
            {restaurantTitle}
          </Typography>
          <Typography
            tag="span"
            color={colors.starcolorDefault}
            className="card__rating"
          >
            {rating}
          </Typography>
        </div>
        <Typography
          className="card__description"
          tag="div"
          color={colors.textColor}
        >
          {description}
        </Typography>
        <div className="card__delivery">
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
