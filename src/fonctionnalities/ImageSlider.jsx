import React from "react";
import { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  slider: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "1000px",
    height: "600px",
    borderRadius: "10px",
  },
  leftArrow: {
    position: "absolute",
    top: "50%",
    left: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
    cursor: "pointer",
    userSelect: "none",
  },
  rightArrow: {
    position: "absolute",
    top: "50%",
    right: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
    cursor: "pointer",
    userSelect: "none",
  },
});
const ImageSlider = ({ slides }) => {
    
  const classes = useStyle();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
                <img src={slide.image} alt="" className={classes.image}></img>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
