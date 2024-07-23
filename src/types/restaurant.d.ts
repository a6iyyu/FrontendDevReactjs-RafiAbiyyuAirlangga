interface Review {
  image: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Restaurant {
  id: string;
  name: string;
  photos: string;
  categories: string[];
  rating: number;
  price_range: string;
  is_open: boolean;
  reviews: Review[];
}