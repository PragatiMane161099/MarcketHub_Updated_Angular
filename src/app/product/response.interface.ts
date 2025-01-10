export interface Product {
  id: number;
  title: string;
  price: number;
  categoryId: number;
  brandId: number;
  description: string;
}

export interface ProductListResponse {
  status: string;
  error?: string;
  data: Product[];
}
