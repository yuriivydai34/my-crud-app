// src/types/index.ts
export interface Item {
  id: string;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}