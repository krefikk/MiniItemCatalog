import React, { useState, useEffect } from 'react';
import { Search, Filter, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { api } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          api.getProducts(),
          api.getCategories()
        ]);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-600 text-lg mb-2">Error!</div>
        <div className="text-gray-600">{error}</div>
      </div>
    );
  }

  return (
    <div>
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        {/* Result Count */}
        <div className="mt-4 text-sm text-gray-600">
          {filteredProducts.length} product found
        </div>
      </div>

      {/* Product List */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">Product not found</div>
          <div className="text-gray-400">Try changing the search criteria</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList; 