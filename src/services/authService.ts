// src/services/authService.ts
import { apiClient } from '@/lib/api-client';
import { AuthResponse } from '@/types/auth';

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/login', { email, password });
  },
  async register(email: string, password: string): Promise<AuthResponse> {
    return apiClient.post<AuthResponse>('/auth/register', { email, password });
  },
};