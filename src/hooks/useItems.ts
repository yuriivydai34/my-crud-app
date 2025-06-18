import { useState, useCallback } from 'react';
import { Item, CreateItemDTO } from '@/types/item';
import { ItemService } from '@/services/itemService';

export function useItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const data = await ItemService.getItems();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch items'));
    } finally {
      setLoading(false);
    }
  }, []);

  const addItem = useCallback(async (newItem: CreateItemDTO) => {
    try {
      setLoading(true);
      const createdItem = await ItemService.createItem(newItem);
      setItems(prev => [...prev, createdItem]);
      return createdItem;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add item'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    items,
    loading,
    error,
    fetchItems,
    addItem,
  };
}