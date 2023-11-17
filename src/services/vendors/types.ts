// node_modules
import { AxiosResponse } from "axios";

// Basic types
export interface ICategories {
  data: Array<unknown>;
  open: boolean;
  single_choice: boolean;
}

export interface ISectionsData {
  description: string;
  exclude_in_pickup: boolean;
  image: string | null;
  kind: string;
  open: boolean;
  selected: boolean;
  single_choice: boolean;
  title: string;
  value: string;
}

export interface ISections {
  data: Array<ISectionsData>;
  description: string;
  exclude_in_pickup: boolean;
  open: boolean;
  section_name: string;
  section_name_fa: string;
  suggest: boolean;
}

export interface ITopData {
  exclude_in_pickup: boolean;
  image: null | string;
  kind: string;
  open: boolean;
  selected: boolean;
  single_choice: boolean;
  title: string;
  value: string;
}

export interface ITop {
  data: ITopData;
  open: boolean;
}

export interface IFilters {
  sections: Array<ISections>;
  top: ITop;
}

export interface IPickUp {
  active: boolean;
  filter_text: string;
  is_new: boolean;
  open: boolean;
}

export interface IExtraSections {
  categories: ICategories;
  filters: IFilters;
  pickup: IPickUp;
  render_type: number;
}

export interface IBadges {
  description: string;
  image: string;
  title: string;
  white_image: string;
}

export interface ISchedules {
  allDay: boolean;
  startHour: string;
  stopHour: string;
  type: number;
  weekday: number;
}

export interface IUserImage {
  commentCount: number;
  description: null | string;
  fileName: string;
  id: number;
  imageType: string;
  likeCount: number;
  thumbNailSource: string;
  timeDifference: number;
  userType: string;
}

export interface IFinalResultData {
  action: string;
  address: string;
  area: string;
  backgroundImage: string;
  backgroundImageCustom: string;
  badges: Array<IBadges>;
  best_coupon: string;
  bid: boolean;
  budgetClass: string;
  childType: string;
  city: string;
  click_id: null | string;
  commentCount: number;
  containerFee: number;
  costsForTwo: number;
  countOfUserImages: number;
  countReview: number;
  coupon_count: number;
  coverPath: string;
  cpc_campaign_hash: null | string;
  cpc_spot: null | string;
  cuisinesArray: Array<{ id: number; title: string }>;
  defLogo: string;
  delay: string;
  delay_time: number;
  deliver: boolean;
  deliveryArea: string;
  deliveryFee: number;
  deliveryFeeDiscount: number;
  deliveryGuarantee: boolean;
  deliveryTime: number;
  description: string;
  discount: number;
  discountForAll: boolean;
  discountStartHour1: string;
  discountStartHour2: string;
  discountStopHour1: string;
  discountStopHour2: string;
  discountType: null | string;
  discountValue: number;
  discountValueForView: number;
  establishment: string;
  eta: number;
  foodTypes: [];
  has_cashback: boolean;
  has_coupon: boolean;
  has_delay: boolean;
  has_first_coupon: boolean;
  id: number;
  isFavorite: boolean;
  isOpen: boolean;
  isZFExpress: boolean;
  is_eco: boolean;
  is_ecommerce: boolean;
  is_economical: boolean;
  is_food_party: boolean;
  is_grocery_economic: boolean;
  is_grocery_returnable: boolean;
  is_grocery_vip: boolean;
  is_market_party: boolean;
  is_pro: boolean;
  lat: number;
  logo: string;
  lon: number;
  maxDeliveryFee: number;
  max_eta: number;
  menuImage: Array<unknown>;
  menuUrl: string;
  minDeliveryFee: number;
  minOrder: number;
  min_eta: number;
  mostPopularItems: string;
  new_type: string;
  new_type_title: string;
  noOrder: boolean;
  onlineOrder: boolean;
  open_at_eta: boolean;
  paymentTypes: Array<number>;
  phone: string;
  preOrderEnabled: boolean;
  preorderToday: {
    weekday: string;
    name: string;
    startHour: string;
    intervals: null | number;
  };
  priority: number;
  rate: number;
  rating: number;
  recommendedFor: string;
  restaurantClass: string;
  restaurantTypes: Array<unknown>;
  schedules: Array<ISchedules>;
  serviceFee: number;
  status: number;
  status_description: string;
  status_text: string;
  status_title: string;
  superTypeAlias: string;
  tax: number;
  taxEnabled: boolean;
  taxEnabledInDeliveryFee: boolean;
  taxEnabledInPackaging: boolean;
  taxEnabledInProducts: boolean;
  taxIncluded: boolean;
  title: string;
  total_time: number;
  trendingScore: number;
  userImage: Array<IUserImage>;
  vendorCode: string;
  vendorType: string;
  vendorTypeTitle: string;
  vendor_status: null | string;
  voteCount: number;
  website: string;
}

export interface IFinalResult {
  type: string;
  data: IFinalResultData;
}

export interface IMetaTags {
  description: string;
  header: string;
  title: string;
}

export interface IData {
  count: number;
  extra_sections: IExtraSections;
  finalResult: Array<IFinalResult>;
  meta_tags: IMetaTags;
  open_count: number;
}

export interface IResponse {
  data: IData;
  render_type: number;
  status: boolean;
}

// Request input type
export interface IParams {
  page: number;
  page_size: number;
  lat: number;
  long: number;
}

// Request output type
export type GetVendors = (params: IParams) => Promise<AxiosResponse<IResponse>>;
