import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card =(props)=>{
    
    return(
        <div className="card">
            <img src={props.src}alt={props.title} className="cardimage"></img>
            <div className="rating">
                    <AiFillStar  />
                    <p>{props.rating}</p>
                    <p>{props.outof}</p>
                    <p className="lighttext">- {props.location}</p>
            </div>
            <div className="tagline">
              <p>{props.tagline}</p>
            </div>
            <div className="price">
              <p>From {props.price}</p>
              <p style={{fontWeight:"100",}}> / person</p>
            </div>
        </div>
    );
}
export default Card;