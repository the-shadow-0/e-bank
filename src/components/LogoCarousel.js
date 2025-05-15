import React from 'react';

function LogoCarousel() {
  return (
    <div className="carousel w-full bg-gray-100 py-8">
      <div className="carousel-item w-full text-center">
        <img src="/images/morocco1.jpg" alt="Landmark 1" className="mx-auto" />
      </div>
      <div className="carousel-item w-full text-center">
        <img src="/images/morocco2.jpg" alt="Landmark 2" className="mx-auto" />
      </div>
      <div className="carousel-item w-full text-center">
        <img src="/images/morocco3.jpg" alt="Landmark 3" className="mx-auto" />
      </div>
    </div>
  );
}

export default LogoCarousel;
