export interface CategoryListResponse {
  status: string;
  data: category[];
  error?: string;
}

export interface category {
  id: number;
  title: string;
  description: string;
}
