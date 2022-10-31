import React from 'react';
import Slider from '../banner/slider';
const Content=()=>{
    return(
        <div class="content">
        <p>New This Week</p>
        <Slider
      slides={[
        {src:"./Banner/slider1.webp",title:"image1"},
        {src:"./Banner/slider2.webp",title:"image2"},
        {src:"./Banner/slider3.webp",title:"image3"}
      ]}></Slider>
        </div>
    )

}
export default Content;