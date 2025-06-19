import { useState } from 'react';
import { Item } from '@/types/item';
import { Button } from '@heroui/react';

interface EditItemFormProps {
  item: Item;
  onSave: (id: string, data: Partial<Item>) => Promise<void>;
  onCancel: () => void;
}

export function EditItemForm({ item, onSave, onCancel }: EditItemFormProps) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(item.id, { title, description });
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <div className="space-x-2">
        <Button color='success' type="submit">Save</Button>
        <Button color='danger' onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
}