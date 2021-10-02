import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";

function ImagesSlider( src) {
  return (
    <Carousel show={3.5} slide={3} swiping={true}>
 
      <img alt='' src='./illustrations/jb1.png' />
     
    </Carousel>
  );
}

export default ImagesSlider;
