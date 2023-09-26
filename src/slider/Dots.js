import React from "react";
import data from "./Imgdata";
import "./Slider.css";

export default function Dots(props){
    const dots = data.map((val, index) => {
        return (
            <span className={index === props.slideIndex ? "active dot" : "dot"}>
            </span>
        );
    })
    return (
        <div className="dots-cont">{dots}</div>
    )
}