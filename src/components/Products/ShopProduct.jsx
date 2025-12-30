import React from 'react'
import './ShopProduct.scss';
import product1 from '../../assets/products/n1.jpg';
import product2 from '../../assets/products/n2.jpg';
import product3 from '../../assets/products/n3.jpg';
import product4 from '../../assets/products/n4.jpg';
const shopProducts = [
  {
    id: 1,
    name: 'Cartoon Astronaut T-Shirts',
    price: '$29.99',
    image: product1,
    LuGalleryThumbnails: [product1],
  },
  {
    id: 2,
    name: 'Cool Blue T-Shirt',
    price: '$39.99',
    image: product2,
  },
  {
    id: 3,
    name: 'Stylish Floral Shirt',
    price: '$49.99',
    image: product3,
  },
  {
    id: 4,
    name: 'Classic White T-Shirt',
    price: '$24.99',
    image: product4,
  },
];
import ProductCard from './ProductCard';
import { LuGalleryThumbnails } from 'react-icons/lu';
export default function ShopProduct() {
  return (
    <section>
        <div className="product-grid">
            {shopProducts.map(product => (
                <div className="new-product-wrapper" key={product.id}>
            <ProductCard {...product} />
          </div>
            ))}
        </div>

    </section>
  )
}
