// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useApi } from '@/hooks/useApi';
import { apiService } from '@/services/api-service';
import type { Item } from '@/types';

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const { loading, error, execute } = useApi();

  useEffect(() => {
    const fetchItems = async () => {
      const data = await execute(() => apiService.getItems());
      setItems(data);
    };

    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  );
}