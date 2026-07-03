import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaSwimmingPool, FaDumbbell, FaWifi, FaTree, FaShieldAlt, FaParking } from 'react-icons/fa';

const amenityData = [
  { icon: <FaSwimmingPool size={40} />, title: 'Infinity Pool', desc: 'Climate-controlled roof pool designed with continuous structural overflow.' },
  { icon: <FaDumbbell size={40} />, title: 'Wellness Lab', desc: 'High-end athletic equipment paired with fully integrated biological sensors.' },
  { icon: <FaShieldAlt size={40} />, title: 'Grade-A Security', desc: 'Encrypted monitoring arrays keeping matrix states entirely safe.' },
  { icon: <FaWifi size={40} />, title: 'Gigabit Arrays', desc: 'Symmetrical fiber trunks deployed with immediate coverage across the hub.' },
  { icon: <FaTree size={40} />, title: 'Eco Atriums', desc: 'Air-purifying botanical gardens integrated into standard walking paths.' },
  { icon: <FaParking size={40} />, title: 'Automated Valet', desc: 'Smart parking decks managing vehicle logistics using localized queuing systems.' }
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-5 bg-white">
      <div className="container my-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">Premium Amenities</h2>
          <p className="text-muted max-w-md mx-auto">Explore premium enhancements running directly on hardware-accelerated interactive carousels.</p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-5 px-2"
        >
          {amenityData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 bg-light p-4 rounded-4 h-100 shadow-sm amenity-hover text-center text-md-start">
                <div className="text-primary mb-3">{item.icon}</div>
                <h4 className="fw-bold mb-2">{item.title}</h4>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}