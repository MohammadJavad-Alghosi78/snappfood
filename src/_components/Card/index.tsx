// node_modules
import Image from "next/image";
// components
import Typography from "../Typography";
// types
import { ICardProps } from "./types";
// strings
import { words } from "@/_strings";
// styles
import colors from "../../_theme/colors.module.scss";
import "./card.scss";

const Card = (props: ICardProps) => {
  const {
    coverImage,
    numOfVotes,
    rating,
    restaurantLogo,
    restaurantTitle,
    description,
    deliveryPrice,
  } = props;
  return (
    <article className="card">
      <header className="card__header">
        <Image className="card_cover" src={coverImage} alt="" loading="eager" />
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
          <Typography tag="span" color={colors.starcolorDefault}>
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
            {deliveryPrice}
          </Typography>
        </div>
      </footer>
    </article>
  );
};

export default Card;
