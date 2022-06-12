import React from "react";
import { Icon } from "@iconify/react";

const CarouselControls = ({ previous, next }) => {
  return (
    <div>
      <button className="carousel-control left" onClick={previous}>
        <Icon icon="ooui:previous-ltr" width="50" height="50" />
      </button>
      <button className="carousel-control right" onClick={next}>
        <Icon icon="ooui:next-ltr" width="50" height="50" />
      </button>
    </div>
  );
};

export default CarouselControls;
