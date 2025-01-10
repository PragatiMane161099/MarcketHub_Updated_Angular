export interface category {
    id: number;
    title: string;
    description: string;
  }
  
  export interface CategoryListResponse {
    status: string;
    error?: string;
    data: category[];
  }
  