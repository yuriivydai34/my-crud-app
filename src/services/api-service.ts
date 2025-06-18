// src/services/api-service.ts
import { apiClient } from '../lib/api-client';

export const apiService = {
  getItems: () => apiClient.get('/items'),
  getItemById: (id: string) => apiClient.get(`/items/${id}`),
  createItem: (data: any) => apiClient.post('/items', data),
  // Add other service methods
};