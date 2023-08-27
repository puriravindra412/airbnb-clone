import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{ MdKeyboardArrowLeft}  from "react-icons/md";
import{MdKeyboardArrowRight} from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";
import { ButtonBase } from '@mui/material';
import Card from "./card";
import { useState } from "react";
const imageData=[
  {rating:'4.5',outof:"(153)",location:"United States",tagline:"Plan The Perfect New York Vacation", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=480", },
  {rating:'3.5',outof:"(90)",location:"spain",tagline:"Design your trip to Barcelona with Gemma", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/6b9c31a3-de0d-4413-ba1c-5a8f107c7b37.jpg?im_w=1440", },
  {rating:'4.0',outof:"(123)",location:"itely",tagline:"Craft a custom trip to Korea with Jay", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/efe98e54-ccdc-4522-8c55-8513882c0504.jpg?im_w=320", },
  {rating:'4.5',outof:"(153)",location:"United States",tagline:"Plan The Perfect New York Vacation", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=480", },
  {rating:'3.5',outof:"(90)",location:"spain",tagline:"Design your trip to Barcelona with Gemma", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/6b9c31a3-de0d-4413-ba1c-5a8f107c7b37.jpg?im_w=1440", },
  {rating:'4.0',outof:"(123)",location:"itely",tagline:"Craft a custom trip to Korea with Jay", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/efe98e54-ccdc-4522-8c55-8513882c0504.jpg?im_w=320", },
  {rating:'4.5',outof:"(153)",location:"United States",tagline:"Plan The Perfect New York Vacation", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2496585-active_media/original/8d64c46c-96ee-4509-bc94-51c61d61d742.jpg?im_w=480", },
  {rating:'3.5',outof:"(90)",location:"spain",tagline:"Design your trip to Barcelona with Gemma", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2488061-active_media/original/6b9c31a3-de0d-4413-ba1c-5a8f107c7b37.jpg?im_w=1440", },
  {rating:'4.0',outof:"(123)",location:"itely",tagline:"Craft a custom trip to Korea with Jay", price:"$1234",src:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2563542-active_media/original/efe98e54-ccdc-4522-8c55-8513882c0504.jpg?im_w=320", },

]

const Crousel = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const [slides,setSlides]=useState(6)
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 850) {
        setSlides(4)
      } else {
        setSlides(6)
      }
    };

    handleWindowResize(); // Set the initial anchor direction

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className="container">
      {/* <h1>Ipl</h1> */}
      <div className="crousel">
        <p>Plan a trip with help from local Hosts around the world</p>
        <div style={{ display: "flex" }}>
          <ButtonBase
            style={{
             
            }}
            className="buttons"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <MdKeyboardArrowLeft />
          </ButtonBase>
          <ButtonBase
            
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <MdKeyboardArrowRight />
          </ButtonBase>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider
          dots="false"
          dotsClass="slick-dots line-indicator"
          ref={sliderRef}
          slidesToShow={slides}
          slidesToScroll={slides}
          infinite="false"
          customPaging={(i) => (
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "-10px",
                opacity: 0,
              }}
            >
              {i}
            </div>
          )}
        >
          {imageData.map((index) =>
            <Card 
                src={index.src}
                rating={index.rating}
                outof={index.outof}
                location={index.location}
                tagline={index.tagline}
                price={index.price}
                ></Card>
              )}
        </Slider>
      </div>
    </div>
  );
};

export default Crousel;