export interface brand {
    id: number;
    title: string;
    description: string;
  }
  
  export interface brandListResponse {
    status: string;
    error?: string;
    data: brand[];
  }
  