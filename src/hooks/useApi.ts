// src/hooks/useApi.ts
import { useState } from 'react';
import { apiService } from '../services/api-service';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const execute = async (apiCall: () => Promise<any>) => {
    try {
      setLoading(true);
      const result = await apiCall();
      return result;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, execute };
}