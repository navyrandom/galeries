import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";

function ImagesSlider(props) {
  return (
    <Carousel show={3.5} slide={3} swiping={true}>
      <img alt="image1" src="./illustrations/jb1.png" />
      <img alt="image1" src="./illustrations/jb2.png" />
      <img alt="image1" src="./illustrations/jb5.png" />
      <img alt="image1" src="./illustrations/jb6.png" />
     
    </Carousel>
  );
}

export default ImagesSlider;
