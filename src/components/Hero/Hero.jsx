import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h4 className="hero-subtitle">Trade-in-offer</h4>
                    <h1 className="hero-title">
                        Super value deals <br />
                        <span className="hero-highlight">On all products</span>
                    </h1>
                    <p className="hero-description">Save more with coupons & up to 70% off!</p>
                    <button className="hero-button">Shop Now</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
