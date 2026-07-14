import React, { useState } from 'react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('Designing');

  const contentData = {
    Designing: {
      description: "An interior design consultancy firm that brings sensitivity to the design of top restaurants, hotels, offices & homes around the world. We stand for quality, safety, and credibility.",
      intro: "We are committed to the impeccable craftsmanship and luxury that is reflected in all we do. We offer bespoke furniture and many accessories.",
      features: [
        "Quality and designs checked deeply",
        "Periodic site reviews and timelines",
        "Design development and strategy"
      ],
      // image: "https://i.pinimg.com/1200x/9b/23/40/9b23405283c8fffe66a27df2d2c2bec9.jpg"
    },
    Approved: {
      description: "Our plans are approved by international safety and aesthetic boards. We ensure that every architectural detail meets the highest standards of the industry.",
      intro: "Every material we use is certified for durability and eco-friendliness. Your safety and comfort are our primary approval criteria.",
      features: [
        "ISO Certified Materials",
        "Structural Safety Approval",
        "Eco-friendly Design Certification"
      ],
      // image: "https://i.pinimg.com/1200x/64/1a/43/641a43b6386263cb9eac93c159bcb420.jpg"
    },
    Guaranteed: {
      description: "We provide a long-term guarantee for all our projects. Our relationship with clients doesn't end at project delivery; we stand by our work for years.",
      intro: "Experience peace of mind with our comprehensive warranty coverage. From furniture to finishing, everything is backed by our brand promise.",
      features: [
        "10-Year Structural Warranty",
        "Post-Project Maintenance Support",
        "100% Satisfaction Guarantee"
      ],
      // image: "https://i.pinimg.com/736x/7e/32/a4/7e32a43e01e30b95cca22b915f7d6664.jpg"
    }
  };

  const tabs = ['Designing', 'Approved', 'Guaranteed'];

  const currentContent = contentData[activeTab];

  return (
    <section className="about-interior-container">
      <div className="about-visual-column">
        <div className="main-image-wrapper">
          <img 
            src="https://i.pinimg.com/1200x/64/1a/43/641a43b6386263cb9eac93c159bcb420.jpg" 
            alt="Main interior" 
            className="main-about-img"
          />
        </div>
      </div>

      <div className="about-content-column">
        <span className="section-subtitle">ABOUT INTERIOR</span>
        <h2 className="section-title font-serif">We Create The Art Of Stylish Living</h2>
        
        {/* <p className="section-description">
          {currentContent.description}
        </p> */}

        <div className="tabs-navigation">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tab-dynamic-content">
          {/* <div className="tab-mini-image-wrapper">
            <img 
              src={currentContent.image} 
              alt={activeTab} 
              className="mini-about-img"
            />
          </div> */}
          
          <div className="tab-text-details">
            <p className="tab-intro-text">
              {currentContent.intro}
            </p>
            
            <ul className="features-checkmark-list">
              {currentContent.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;