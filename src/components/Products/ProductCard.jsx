import React from "react";
import "./ProductCard.scss";
import { BsCartPlus } from "react-icons/bs";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductCard = ({ image, brand, name, price, rating }) => {

  // Star rating funksiyasi
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<FaStar key={i} />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <div className="brand-name">{brand}</div>
        <div className="product-name">{name}</div>
        <div className="stars">{renderStars()}</div>

        <div className="product-footer">
          <div className="price">${price}</div>
          <button className="cart-button">
            <BsCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
