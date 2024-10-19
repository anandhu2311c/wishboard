import React from 'react';

interface WishItem {
  id: string;
  name: string;
  count: number;
  budget: number;
}

interface BudgetDisplayProps {
  items: WishItem[];
  totalBudget: number;
}

const BudgetDisplay: React.FC<BudgetDisplayProps> = ({ items, totalBudget }) => {
  const totalSpent = items.reduce((acc, item) => acc + item.budget * item.count, 0);
  const remainingBudget = totalBudget - totalSpent;

  const sortedItems = [...items].sort((a, b) => b.count - a.count);
  const topItems = sortedItems.slice(0, 3);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Budget Overview</h2>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Budget:</span>
          <span className="font-semibold">₹{totalBudget.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Spent:</span>
          <span className="font-semibold">₹{totalSpent.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Remaining:</span>
          <span className={`font-semibold ${remainingBudget < 0 ? 'text-red-500' : 'text-green-500'}`}>
          ₹{remainingBudget.toFixed(2)}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">Top Requested Items</h3>
      <ul className="space-y-2">
        {topItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.name}</span>
            <span className="font-semibold">{item.count} requests</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BudgetDisplay;