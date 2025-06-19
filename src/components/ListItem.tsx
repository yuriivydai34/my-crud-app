import { useState } from 'react';
import { Item } from '@/types/item';
import { EditItemForm } from './EditItemForm';
import { Button } from '@heroui/react';

interface ListItemProps {
  item: Item;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: Partial<Item>) => Promise<void>;
}

export function ListItem({ item, onDelete, onEdit }: ListItemProps) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <EditItemForm
        item={item}
        onSave={onEdit}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="space-x-2">
        <Button
          onClick={() => setEditing(true)}
          color='primary'
        >
          Edit
        </Button>
        <Button
          onClick={() => onDelete(item.id)}
          color='danger'
        >
          Delete
        </Button>
      </div>
    </div>
  );
}