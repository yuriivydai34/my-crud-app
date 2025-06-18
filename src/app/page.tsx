// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useApi } from '@/hooks/useApi';
import { apiService } from '@/services/api-service';
import type { Item } from '@/types';
import AddItem from '@/components/AddItem';

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

  const handleAddItem = async (newItem: Item) => {
    try {
      // First optimistically update the UI
      setItems(prev => [...prev, newItem]);

      // Then send to the server
      const savedItem = await execute(() => apiService.createItem(newItem));

      // Update with the server response (which might include an updated ID or other fields)
      setItems(prev => prev.map(item =>
        item.id === newItem.id ? savedItem : item
      ));
    } catch (error) {
      // If there's an error, remove the optimistically added item
      setItems(prev => prev.filter(item => item.id !== newItem.id));
      // Show error to user (you might want to add error handling here)
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main>
      <AddItem onAdd={handleAddItem} />
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </main>
  );
}