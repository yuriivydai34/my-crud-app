'use client';

import { useEffect } from 'react';
import { AddItem } from '@/components/AddItem';
import { ListItems } from '@/components/ListItems';
import { useItems } from '@/hooks/useItems';

export default function Home() {
  const { items, loading, error, fetchItems, addItem } = useItems();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <AddItem onAdd={addItem} isLoading={loading} />
      <ListItems items={items} isLoading={loading} />
    </main>
  );
}