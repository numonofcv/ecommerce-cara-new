import React from "react";
import ProductCard from "./ProductCard";
import "./FeaturesProduct.scss";
import f1 from "../../assets/products/f1.jpg";
import f2 from "../../assets/products/f2.jpg";
import f3 from "../../assets/products/f3.jpg";
import f4 from "../../assets/products/f4.jpg";
import f5 from "../../assets/products/f5.jpg";
import f6 from "../../assets/products/f6.jpg";
import f7 from "../../assets/products/f7.jpg";
import f8 from "../../assets/products/f8.jpg";
const products = [
  {
    id: 1,
    brand: "adidas",
    name: "Cartoon Astronaut T-Shirts",
    rating: 5,
    price: 78,
    image: f1,
  },
  {
    id: 2,
    brand: "nike",
    name: "Summer Floral Shirt",
    rating: 4,
    price: 65,
    image: f2,
  },
  {
    id: 3,
    brand: "puma",
    name: "Casual Hoodie",
    rating: 4.5,
    price: 90,
    image: f3,
  },
  {
    id: 4,
    brand: "reebok",
    name: "Sports Jacket",
    rating: 3.5,
    price: 120,
    image: f4,
  },
  {
    id: 5,
    brand: "fila",
    name: "Denim Jeans",
    rating: 4,
    price: 85,
    image: f5,
  },
  {
    id: 6,
    brand: "under armour",
    name: "Graphic T-Shirt",
    rating: 5,
    price: 45,
    image: f6,
  },
  {
    id: 7,
    brand: "new balance",
    name: "Athletic Shorts",
    rating: 4.5,
    price: 55,
    image: f7,
  },
  {
    id: 8,
    brand: "asics",
    name: "Cartoon Astronaut T-Shirts",
    rating: 4,
    price: 110,
    image: f8,
  },
];

const FeaturesProduct = () => {
  return (
    <section className="features-product-section">
      <div className="product-container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-desc">Summer Collection New Modern Design</p>
        </div>
        {products.map((p) => (
          <div className="product-wrapper" key={p.id}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesProduct;
