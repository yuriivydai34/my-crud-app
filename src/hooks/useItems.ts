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

  const deleteItem = useCallback(async (id: string) => {
    try {
      setLoading(true);
      await ItemService.deleteItem(id);
      setItems(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete item'));
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editItem = useCallback(async (id: string, data: Partial<Item>) => {
    setLoading(true);
    try {
      const updated = await ItemService.updateItem(id, data);
      setItems(prev =>
        prev.map(item => (item.id === id ? updated : item))
      );
      setError(null);
    } catch (e) {
      setError('Failed to edit item');
      console.error('Error editing item:', e);
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
    deleteItem,
    editItem
  };
}