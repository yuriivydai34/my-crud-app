import { Item } from '@/types/item';

interface ListItemsProps {
  items: Item[];
  isLoading?: boolean;
}

export function ListItems({ items, isLoading = false }: ListItemsProps) {
  if (isLoading) {
    return <div className="mt-4">Loading...</div>;
  }

  return (
    <div className="mt-8 space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}