import React from "react";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import FeaturesProduct from "../components/Products/FeaturesProducts.jsx";
import HomeBannerPromotion from "../components/Banner/HomeBannerPromotion.jsx";
import NewProducts from "../components/Products/NewProducts.jsx";
import SecondPromotion from "../components/Banner/SecondPromotion.jsx";
import Newsletter from "../components/NewsLater/NewsLatter.jsx";

const Home = () => (
    <section>
        <Hero />
        <Features/>
        <FeaturesProduct />
        <HomeBannerPromotion />
        <NewProducts/>
        <SecondPromotion/>
        <Newsletter/>
    </section>
);

export default Home;
