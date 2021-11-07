import { Carousel } from "@trendyol-js/react-carousel";
import React from "react";

function ImagesSlider({title,details, image1, image2, image3}) {
  return (
    <>
    <h2>{title}</h2>
    <Carousel show={3.5} slide={3} swiping={true}>
 
      <img alt={title} src={image1} />
      <img alt={title} src={image2} />
      <img alt={title} src={image3} />
     
    </Carousel>
    <p>{details}</p>
    </>
  );
}

export default ImagesSlider;
