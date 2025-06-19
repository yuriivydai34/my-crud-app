// src/types/item.ts
export interface Item {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface CreateItemDTO {
  title: string;
  description: string;
}