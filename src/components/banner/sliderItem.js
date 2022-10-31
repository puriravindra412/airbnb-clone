import React from "react";

const SliderItem =(props)=>{
    console.log(props.image);
    return(
        <div className="slideritem">
            <img src={props.image} alt={props.title} className="image"></img>
            <div className="slidercontent">
                <h6>Collection</h6>
                <h2>Most Popular</h2>
                <button>Show all</button>
                
            </div>
        </div>
    );
}
export default SliderItem;