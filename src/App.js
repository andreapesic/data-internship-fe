import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // TODO: Replace with real API call
        // const response = await axios.get('/products?max_price=VALUE');
        // setProducts(response.data);
        
        // Mock data for now
        const mockProducts = [
          {
            product_id: "1",
            product_name: "Premium Wireless Headphones",
            price: 199.99,
            description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
            category: "Electronics",
            rating_rate: 4.5,
            rating_count: 128
          },
          {
            product_id: "2", 
            product_name: "Organic Cotton T-Shirt",
            price: 29.99,
            description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Made from 100% organic cotton.",
            category: "Clothing",
            rating_rate: 4.2,
            rating_count: 89
          },
          {
            product_id: "3",
            product_name: "Stainless Steel Water Bottle",
            price: 24.99,
            description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and leak-proof design.",
            category: "Accessories",
            rating_rate: 4.7,
            rating_count: 203
          },
          {
            product_id: "4",
            product_name: "Bluetooth Speaker",
            price: 79.99,
            description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures and parties.",
            category: "Electronics",
            rating_rate: 4.3,
            rating_count: 156
          },
          {
            product_id: "5",
            product_name: "New Product Launch",
            price: 49.99,
            description: "Brand new product just launched. High quality and innovative design. Be the first to try it!",
            category: "New Arrivals",
            rating_rate: null,
            rating_count: null
          }
        ];
        
        setProducts(mockProducts);
        setError(null);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🛍️ Data Internship Product Store</h1>
      </header>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
