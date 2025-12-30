import React from "react";
import {Link} from "react-router-dom";
import ProductCard from "./ProductCard";
import featureProducts from "../../data/product";
import "./FeaturesProduct.scss";

const FeaturesProduct = () => {
    return (
        <section className="features-product-section">
            <div className="product-container">
                <div className="section-header">
                    <h2 className="section-title">Featured Products</h2>
                    <p className="section-desc">Summer Collection New Modern Design</p>
                </div>

                <div className="product-grid">
                    {featureProducts.map((p) => (
                        <Link to={`/product/${p.id}`} key={p.id} className="product-wrapper">
                            <ProductCard {...p} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesProduct;
