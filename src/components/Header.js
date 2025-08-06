import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-gray-800 hover:text-primary-600 transition-colors">
            <ShoppingBag className="w-8 h-8 text-primary-600" />
            <span>Item Catalog</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 