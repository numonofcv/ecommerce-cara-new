import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import featureProducts from "../../data/product";
import "./ProductDetailsComponents.scss";

const ProductDetailsComponent = () => {
  const { id } = useParams();
  const product = featureProducts.find(p => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <h2>Product not found</h2>;

  const placeholder = "https://via.placeholder.com/150";

  return (
    <section className="product-details-page">
      <div className="product-details-container">

        {/* LEFT – IMAGE */}
        <div className="product-image">
          <img src={mainImage || placeholder} alt={product.name} />
          <div className="thumbnails">
            {product.thumbnails && product.thumbnails.length > 0 ? (
              product.thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb || placeholder}
                  alt={`${product.name} ${index}`}
                  onClick={() => setMainImage(thumb)}
                />
              ))
            ) : (
              <img src={placeholder} alt="placeholder" />
            )}
          </div>
        </div>

        {/* RIGHT – INFO */}
        <div className="product-info">
          <span className="breadcrumb">Home / T-Shirt</span>

          <h1>{product.name}</h1>
          <h2>${product.price}.00</h2>

          <select value={size} onChange={e => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">XL</option>
          </select>

          <div className="cart-actions">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={e => setQty(e.target.value)}
            />
            <button>Add To Cart</button>
          </div>

          <h3>Product Details</h3>
          <p>
            {product.description ||
              "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear."}
          </p>

          <Link to="/shop" className="back-link">← Back to Shop</Link>
        </div>

      </div>
    </section>
  );
};

export default ProductDetailsComponent;
