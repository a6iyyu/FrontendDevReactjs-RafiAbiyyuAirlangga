interface Review {
  image: string;
  name: string;
  rating: number;
  comment: string;
}

interface Location {
  street_name: string;
  city: string;
  country: string;
}

export interface Restaurant {
  id: string;
  name: string;
  photos: string;
  category: string;
  rating: number;
  price_range: string;
  is_open: boolean;
  reviews: Review[];
  location: Location;
}