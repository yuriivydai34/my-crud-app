export function ListItem({ item }: { item: { title: string; description: string } }) {
  return (
    <div className="p-4 border rounded">
      <h3 className="font-semibold">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
}