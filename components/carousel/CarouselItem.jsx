import React from "react";

const CarouselItem = ({
  picture,
  title,
  description,
  link,
  startSlide,
  stopSlide,
}) => {
  return (
    <div
      className="carousel-item"
      onMouseEnter={stopSlide}
      onMouseOut={startSlide}
    >
      <div className="article">
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="carousel-picture">
          <img
            src={picture}
            alt={title}
            style={{ width: "685px", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
