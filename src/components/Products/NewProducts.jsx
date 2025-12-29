import React from 'react';
import './NewProducts.scss';
import ProductCard from './ProductCard';

import n1 from '../../assets/products/n1.jpg';
import n2 from '../../assets/products/n2.jpg';
import n3 from '../../assets/products/n3.jpg';
import n4 from '../../assets/products/n4.jpg';
import n5 from '../../assets/products/n5.jpg';
import n6 from '../../assets/products/n6.jpg';
import n7 from '../../assets/products/n7.jpg';
import n8 from '../../assets/products/n8.jpg';

const newProducts = [
  { id: 1, brand: "adidas", name: "Cartoon Astronaut T-Shirts", rating: 5, price: 78, image: n1 },
  { id: 2, brand: "nike", name: "Summer Floral Shirt", rating: 4, price: 65, image: n2 },
  { id: 3, brand: "puma", name: "Casual Hoodie", rating: 4.5, price: 90, image: n3 },
  { id: 4, brand: "reebok", name: "Sports Jacket", rating: 3.5, price: 120, image: n4 },
  { id: 5, brand: "fila", name: "Denim Jeans", rating: 4, price: 85, image: n5 },
  { id: 6, brand: "under armour", name: "Graphic T-Shirt", rating: 5, price: 45, image: n6 },
  { id: 7, brand: "new balance", name: "Athletic Shorts", rating: 4.5, price: 55, image: n7 },
  { id: 8, brand: "asics", name: "Cartoon Astronaut T-Shirts", rating: 4, price: 110, image: n8 },
];

export default function NewProducts() {
  return (
    <section className="new-products-section">
      <div className="new-products-container">
        <div className="new-products-header">
          <h2 className="new-products-title">New Arrivals</h2>
          <p className="new-products-desc">
            Summer Collection New Modern Design
          </p>
        </div>

        {newProducts.map((p) => (
          <div className="new-product-wrapper" key={p.id}>
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </section>
  );
}
