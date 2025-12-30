import React from "react";
import ShopBanner from "../components/Banner/ShopBanner";
import FeaturesProduct from "../components/Products/FeaturesProducts";
import Newsletter from "../components/NewsLater/NewsLatter";
import ShopProduct from "../components/Products/ShopProduct";

const Shop = () => (
    <div>
        <ShopBanner />
        <ShopProduct />
        <FeaturesProduct/>
        <Newsletter/>
        <p>Bu Shop sahifa (placeholder).</p>
    </div>
);

export default Shop;
