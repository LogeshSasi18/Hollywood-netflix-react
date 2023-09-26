import React from "react";
import data from "./Imgdata";
import "./Slider.css";

export default function Caption(props) {
  const cap = data.map((val, index) => {
    return (
      <>
        <div className={index === props.slideIndex ? "mycap fade" : "mynone"}>
          {val.caption}
        </div>
      </>
    );
  });
  return cap;
}
