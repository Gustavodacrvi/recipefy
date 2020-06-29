

export interface Wine {
  id: string;
  title: string;
  averageRating: number;
  description: string;
  imageUrl: string;
  link: string;
  price: string;
  ratingCount: number;
  score: number;
}

export interface WinePairingResponse {
  pairedWines: string[];
  pairingText: string;
  productMatches: Wine[];
}

export interface Metric {
  amount: number;
  unitLong: string;
  unitShort: string;
}

export interface Ingredient {
  id: string;
  aisle: string;
  amount: number;
  consitency: string;
  image: string;
  name: string;
  original: string;
  originalName: string;
  unit: string;
  measures: {
    metric: Metric;
    us: Metric;
  };
  meta: string[];
}
