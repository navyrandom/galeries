import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";

function ImagesSlider({alt, src}) {
  return (
    <Carousel show={3.5} slide={3} swiping={true}>
 
      <img alt={alt} src={src} />
     
    </Carousel>
  );
}

export default ImagesSlider;
