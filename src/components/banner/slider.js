import React from "react";
import SliderItem from "./sliderItem";
const Slider =(props)=>{
    return(
        <div className="slider">
            
           {
            props.slides.map((index)=>
            <SliderItem image={index.src} title={index.title}></SliderItem>)
           }
        </div>
    );
}
export default Slider;