import React from "react";
import "./Slider.css";
import data from "./Imgdata";

export default function Slider(props) {
  const slide = data.map((val, index) => {
    return (
      <div className={index === props.slideIndex ? "myslides fade" : "mynone"}>
        <img src={val.src} alt={val.caption} />
      </div>
    );
  });
  return slide;
}
