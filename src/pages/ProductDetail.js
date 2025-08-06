import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart } from 'lucide-react';
import { api } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const productData = await api.getProduct(id);
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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
        <div className="text-red-600 text-lg mb-2">Hata!</div>
        <div className="text-gray-600">{error}</div>
        <Link
          to="/"
          className="mt-4 inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-600">Product not found</div>
        <Link
          to="/"
          className="mt-4 inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-primary-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <span className="text-gray-800">{product.category}</span>
          </li>
          <li>/</li>
          <li>
            <span className="text-gray-800">{product.title}</span>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.title}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-primary-600">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating?.rate || 0)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating?.rate || 0} ({product.rating?.count || 0} review)
              </span>
            </div>

            {/* Açıklama */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Özellikler */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Product Features
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stock:</span>
                  <span className="font-medium text-green-600">Available</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 pt-4">
              <button className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 