import { useState } from 'react';
import { Item, CreateItemDTO } from '../types/index';
import { Button } from '@heroui/react';

interface AddItemProps {
  onAdd: (item: CreateItemDTO) => Promise<void>;
  isLoading?: boolean;
}

export function AddItem({ onAdd, isLoading = false }: AddItemProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await onAdd({ title, description });
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          disabled={isLoading}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          disabled={isLoading}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <Button
        type="submit"
        color='success'
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add Item'}
      </Button>
    </form>
  );
}