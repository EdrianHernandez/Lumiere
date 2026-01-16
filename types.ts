export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}