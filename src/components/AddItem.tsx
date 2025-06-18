import { useState } from 'react';
import { Item, CreateItemDTO } from '@/types/item';

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
      <button
        type="submit"
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
      >
        {isLoading ? 'Adding...' : 'Add Item'}
      </button>
    </form>
  );
}