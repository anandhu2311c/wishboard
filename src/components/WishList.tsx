import React from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

interface WishItem {
  id: string;
  name: string;
  count: number;
  budget: number;
}

interface WishListProps {
  items: WishItem[];
  incrementItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

const WishList: React.FC<WishListProps> = ({ items, incrementItem, deleteItem }) => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Wish List</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items in the wishlist yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-gray-500 sm:ml-2">
                  (₹{item.budget.toFixed(2)} x {item.count})
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => incrementItem(item.id)}
                  className="flex items-center text-blue-500 hover:text-blue-600"
                  aria-label={`Add another ${item.name}`}
                >
                  <PlusCircle className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Add</span>
                </button>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="flex items-center text-red-500 hover:text-red-600"
                  aria-label={`Delete ${item.name}`}
                >
                  <Trash2 className="h-5 w-5 mr-1" />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishList;