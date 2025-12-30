import React from "react";
import ProductDetailsComponent from "../components/ProductDetails/ProductDetailsComponent";
import FeaturesProduct from "../components/Products/FeaturesProducts";
import Newsletter from "../components/NewsLater/NewsLatter";

const ProductDetails = () => {
  return(
    <>
    <ProductDetailsComponent />
    <FeaturesProduct/>
    <Newsletter/>
    </>
  )
};

export default ProductDetails;
