import React from "react";
import "./NewsLatter.scss";

const Newsletter = () => {
  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__text">
          <h4>Sign Up For Newsletter</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>

        <form className="newsletter__form">
          <input
            type="email"
            placeholder="Your email address"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
