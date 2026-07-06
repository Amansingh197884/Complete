import React from 'react';
import { 
  FaSwimmingPool, 
  FaDumbbell, 
  FaShieldAlt, 
  FaWifi, 
  FaTree, 
  FaParking, 
  FaHome,
  FaSpa

} from 'react-icons/fa';

export default function Amenities() {
  const amenityData = [
    { 
      id: 1,
      icon: <FaSwimmingPool />, 
      title: 'Infinity Pool', 
      desc: 'Climatized luxury pool with panoramic views for ultimate relaxation.' 
    },
    { 
      id: 2,
      icon: <FaDumbbell />, 
      title: 'Wellness Lab', 
      desc: 'High-end fully equipped gym setup for your complete fitness routine.' 
    },
    { 
      id: 3,
      icon: <FaShieldAlt />, 
      title: 'Grade-A Security', 
      desc: 'Encrypted smart access gates and 24/7 continuous surveillance.' 
    },
    { 
      id: 4,
      icon: <FaWifi />, 
      title: 'Gigabit Arrays', 
      desc: 'Symmetrical ultra-high-speed network connectivity everywhere.' 
    },
    { 
      id: 5,
      icon: <FaTree />, 
      title: 'Eco Atriums', 
      desc: 'Air-purifying botanical gardens and lush green refreshing spaces.' 
    },
    { 
      id: 6,
      icon: <FaParking />, 
      title: 'Automated Valet', 
      desc: 'Smart parking systems with EV charging docks integrated.' 
    },
     { 
      id: 7,
      icon: <FaHome />, 
      title: 'Smart Living', 
      desc: 'Fully integrated IoT automated home automation systems at your fingertips.' 
    },
    { 
      id: 8,
      icon: <FaSpa />, 
      title: 'Luxury Spa', 
      desc: 'Premium therapeutic massage rooms and steam sauna chambers.' 
    }
  ];

  return (
    <section className="amenities-section">
      <div className="amenities-container">
                <h2 className="display-5 fw-bold text-center text-dark ">Premium Amenities</h2>
            <p className="text-center text-muted  fw-semibold">Explore premium enhancements running directly on hardware-accelerated interactive carousels.</p>

        <div className="amenities-grid">
          {amenityData.map((item) => (
            <div key={item.id} className="amenity-card">
             
              <div className="hover-slide-bg"></div>
              
              <div className="card-content">
                <div className="amenity-icon">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}