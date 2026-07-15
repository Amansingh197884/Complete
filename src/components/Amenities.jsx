const Amenities = () => {
  const amenitiesData = [
    { image: homeImg, title: "Clubhouse with indoor games" },
    { image: gymImg, title: "Fully equipped gymnasium" },
    { image: mainRoomImg, title: "Multipurpose hall" },
    { image: amanImg, title: "Yoga and meditation zone" },
  ];

  return (
    <section className="amenities-section position-relative d-flex align-items-center">
      <div className="amenities-bg"></div>

      <div className="container position-relative z-1 py-5">
        <div className="row g-4 justify-content-center">
          {amenitiesData.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="amenity-card text-center d-flex flex-column align-items-center justify-content-center h-100 p-3">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="amenity-icon-img mb-3" 
                />
                <p className="amenity-title m-0 text-dark fw-normal">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;