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
      <img 
        src={product.image} 
        alt={product.title}
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-price">${product.price}</div>
        <span className="product-category">{product.category}</span>
        <p className="product-description">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description
          }
        </p>
        <div className="product-rating">
          <span className="rating-stars">{renderStars(product.rating.rate)}</span>
          <span className="rating-text">
            {product.rating.rate} ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
