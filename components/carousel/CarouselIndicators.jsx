import React from "react";

const CarouselIndicators = ({ slides, currentIndex, switchIndex }) => {
  return (
    <div className="carousel-indicators">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => switchIndex(index)}
          className={`carousel-indicator-item ${
            currentIndex === index ? "active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicators;
