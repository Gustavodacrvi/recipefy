

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
