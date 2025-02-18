import React from "react";
import { Carousel as CC } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const createCarouselItemImage = (src) => (
  <div>
    <img src={src} alt="" />
  </div>
);

const Carousel = (props) => {
  const { images } = props;

  const baseChildren = images.map((x) => createCarouselItemImage(x));
  return (
    <CC autoPlay dynamicHeight={true} showThumbs={false} showStatus={false}>
      {baseChildren}
    </CC>
  );
};
export default Carousel;
