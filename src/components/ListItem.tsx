import { Item } from '@/types/item';

interface ListItemProps {
  item: Item;
  onDelete: (id: string) => Promise<void>;
}

export function ListItem({ item, onDelete }: ListItemProps) {
  const handleDelete = async () => {
    try {
      await onDelete(item.id);
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <button 
        onClick={handleDelete}
        variant="destructive"
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
}