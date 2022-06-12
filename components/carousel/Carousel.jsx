import React, { useState, useEffect, useRef } from "react";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControls";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css";

const Carousel = ({
  slides,
  interval = 5000,
  controls = false,
  indicators = false,
  autoplay = true,
  width = 1000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const previousSlide = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };
  const nextSlide = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    if (autoplay) {
      stopSlideTimer();
      slideInterval.current = setInterval(() => {
        setCurrentSlide((currentSlide) =>
          currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        );
      }, interval);
    }
  };

  const stopSlideTimer = () => {
    if (autoplay && slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <div className="carousel" style={{maxWidth:width}}>
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem
            picture={slide.picture}
            title={slide.title}
            description={slide.description}
            key={index}
            startSlide={startSlideTimer}
            stopSlide={stopSlideTimer}
          />
        ))}
      </div>
      {indicators && (
        <CarouselIndicators
          currentIndex={currentSlide}
          slides={slides}
          switchIndex={switchIndex}
        />
      )}
      {controls && (
        <CarouselControls previous={previousSlide} next={nextSlide} />
      )}
    </div>
  );
};

export default Carousel;
