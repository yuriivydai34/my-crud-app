import { Item } from '@/types/item';
import { ListItem } from './ListItem';

interface ListItemsProps {
  items: Item[];
  isLoading?: boolean;
  onDelete: (id: string) => Promise<void>;
  onEdit: (id: string) => Promise<void>;
}

export function ListItems({ items, isLoading = false, onDelete, onEdit }: ListItemsProps) {
  if (isLoading) {
    return <div className="mt-4">Loading...</div>;
  }

  return (
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <ListItem 
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}