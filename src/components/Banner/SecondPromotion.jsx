import React from "react";
import "./SecondPromotion.scss";

const SecondPromotion = () => {
  return (
    <section className="second-promotion-section">
      <div className="promo-row-top">
        <div className="promo-banner banner-large banner-1">
          <div className="banner-text">
            <h4>CRAZY DEALS</h4>
            <h2>buy 1 get 1 free</h2>
            <p>The best classic dress is on sale at caro.</p>
            <button className="white-outline-btn">Learn More</button>
          </div>
        </div>

        <div className="promo-banner banner-large banner-2">
          <div className="banner-text">
            <h4>SPRING / SUMMER</h4>
            <h2>Upcoming season</h2>
            <p>The best classic dress is on sale at caro.</p>
            <button className="white-outline-btn">Collection</button>
          </div>
        </div>
      </div>

      <div className="promo-row-bottom">
        <div className="promo-banner banner-small banner-3">
          <div className="banner-text">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection 50% OFF</h3>
          </div>
        </div>

        <div className="promo-banner banner-small banner-4">
          <div className="banner-text">
            <h2>NEW FOOTWEAR COLLECTION</h2>
            <h3>Spring / Summer 2024</h3>
          </div>
        </div>

        <div className="promo-banner banner-small banner-5">
          <div className="banner-text">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondPromotion;
