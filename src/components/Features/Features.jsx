import React from 'react';
import './Features.scss';
import f1 from '../../assets/features/f1.png';
import f2 from '../../assets/features/f2.png';
import f3 from '../../assets/features/f3.png';
import f4 from '../../assets/features/f4.png';
import f5 from '../../assets/features/f5.png';
import f6 from '../../assets/features/f6.png';
// Rasmlar manzili loyihangizga qarab o'zgarishi mumkin
const featureData = [
  { id: 1, img: f1, title: "Free Shipping", color: "#fddde4" },
  { id: 2, img: f2, title: "Online Order", color: "#cdebbc" },
  { id: 3, img: f3, title: "Save Money", color: "#d1e8f2" },
  { id: 4, img: f4, title: "Promotions", color: "#cdd4f8" },
  { id: 5, img: f5, title: "Happy Sell", color: "#f6dbf6" },
  { id: 6, img: f6, title: "24/7 Support", color: "#fff2e5" },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {featureData.map((item) => (
          <div key={item.id} className="feature-card">
            <div className="feature-image-wrapper">
              <img src={item.img} alt={item.title} className="feature-img" />
            </div>
            <h6 style={{ backgroundColor: item.color }} className="feature-title">
              {item.title}
            </h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;