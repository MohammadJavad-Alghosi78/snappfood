export type OptionTypes = "pro" | "plus";

export interface IOption {
  message: string;
  type: OptionTypes;
}

export interface ICardProps {
  options?: Array<IOption> | IOption;
  coverImage: string;
  restaurantLogo: string;
  restaurantTitle: string;
  numOfVotes: number;
  rating: number;
  description: string;
  deliveryPrice: number;
}
