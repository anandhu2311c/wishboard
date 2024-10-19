import React, { useState, useEffect } from 'react';
import { Heart, Gift, Users } from 'lucide-react';
import WishList from './components/WishList';
import ItemEntry from './components/ItemEntry';
import BudgetDisplay from './components/BudgetDisplay';
import BudgetEntry from './components/BudgetEntry';
import Sidebar from './components/Sidebar';

interface WishItem {
  id: string;
  name: string;
  count: number;
  budget: number;
}

const App: React.FC = () => {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);
  const [totalBudget, setTotalBudget] = useState<number>(0);

  useEffect(() => {
    const storedItems = localStorage.getItem('wishItems');
    const storedBudget = localStorage.getItem('totalBudget');
    if (storedItems) {
      setWishItems(JSON.parse(storedItems));
    }
    if (storedBudget) {
      setTotalBudget(parseFloat(storedBudget));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishItems', JSON.stringify(wishItems));
  }, [wishItems]);

  useEffect(() => {
    localStorage.setItem('totalBudget', totalBudget.toString());
  }, [totalBudget]);

  const addItem = (name: string, budget: number) => {
    const existingItem = wishItems.find(item => item.name.toLowerCase() === name.toLowerCase());
    if (existingItem) {
      setWishItems(wishItems.map(item =>
        item.id === existingItem.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setWishItems([...wishItems, { id: Date.now().toString(), name, count: 1, budget }]);
    }
  };

  const incrementItem = (id: string) => {
    setWishItems(wishItems.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const deleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setWishItems(wishItems.filter(item => item.id !== id));
    }
  };

  const updateBudget = (newBudget: number) => {
    setTotalBudget(newBudget);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-5xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-5 mb-8">
              <Heart className="h-14 w-14 text-pink-500 animate-pulse" />
              <h1 className="text-4xl font-bold text-gray-800">Orphanage Wishboard</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <BudgetEntry updateBudget={updateBudget} currentBudget={totalBudget} />
                  <ItemEntry addItem={addItem} />
                  <WishList items={wishItems} incrementItem={incrementItem} deleteItem={deleteItem} />
                  <BudgetDisplay items={wishItems} totalBudget={totalBudget} />
                </div>
              </div>
              <div className="md:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;