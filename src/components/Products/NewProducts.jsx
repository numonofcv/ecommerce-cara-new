import React from "react";
import { Link } from "react-router-dom";
import "./NewProducts.scss";
import ProductCard from "./ProductCard";
import newProducts from "../../data/product";

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
            <Link
              to={`/product/${p.id}`}
              key={p.id}
              className="new-product-wrapper"
            >
              <ProductCard {...p} />
            </Link>
          ))}
        </div>
    </section>
  );
}
