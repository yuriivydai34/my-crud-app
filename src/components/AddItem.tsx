import { useState } from 'react';
import { Item } from '@/types';

interface AddItemProps {
  onAdd: (newItem: Item) => void;
}

export default function AddItem({ onAdd }: AddItemProps) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newItem: Item = {
      title
    };

    onAdd(newItem);
    
    // Reset form
    setTitle('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <button type="submit">Add Item</button>
    </form>
  );
}