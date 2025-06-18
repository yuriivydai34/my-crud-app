import { apiClient } from '@/lib/api-client';
import { Item, CreateItemDTO } from '@/types/item';

export class ItemService {
  static async getItems(): Promise<Item[]> {
    return apiClient.get<Item[]>('/items');
  }

  static async createItem(data: CreateItemDTO): Promise<Item> {
    return apiClient.post<Item>('/items', data);
  }

  static async deleteItem(id: string): Promise<void> {
    return apiClient.delete(`/items/${id}`);
  }
}