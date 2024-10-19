import React from 'react';
import { Gift, Users, Heart } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Orphanage Info</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Users className="h-6 w-6 text-indigo-500" />
          <span>50 children</span>
        </div>
        <div className="flex items-center space-x-3">
          <Gift className="h-6 w-6 text-indigo-500" />
          <span>100+ wishes granted</span>
        </div>
        <div className="flex items-center space-x-3">
          <Heart className="h-6 w-6 text-indigo-500" />
          <span>Join our community</span>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">How to Help</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Donate items from the wishlist</li>
          <li>Volunteer your time</li>
          <li>Spread the word</li>
        </ul>
      </div>
      <div className="mt-6">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Children playing"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Sidebar;