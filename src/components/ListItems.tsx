import { Item } from '@/types/item';
import { ListItem } from './ListItem';
// import { Button } from '@/components/ui/button'; // Assuming you're using a UI library

interface ListItemsProps {
  items: Item[];
  isLoading?: boolean;
  onDelete: (id: string) => Promise<void>;
}

export function ListItems({ items, isLoading = false, onDelete }: ListItemsProps) {
  const handleDelete = async (id: string) => {
    try {
      await onDelete(id);
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  if (isLoading) {
    return <div className="mt-4">Loading...</div>;
  }

  return (
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded flex justify-between items-center">
          <ListItem item={item} />
          <button 
            onClick={() => handleDelete(item.id)}
            variant="destructive"
            className="bg-red-500 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}