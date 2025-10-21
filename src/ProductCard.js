import React from 'react';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push('☆');
    }
    return stars.join('');
  };

  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-title">{product.product_name}</h3>
        <div className="product-price">${product.price}</div>
        <span className="product-category">{product.category}</span>
        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description
          }
        </p>
        <div className="product-rating">
          <span className="rating-stars">{renderStars(product.rating_rate || 0)}</span>
          <span className="rating-text">
            {product.rating_rate ? `${product.rating_rate} (${product.rating_count || 0} reviews)` : 'No ratings yet'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
