import React from "react";
import Card from "./card";
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
const MobileCrousel =(props)=>{
    return(
        <div className="mobileslider">
            
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
        </div>
    );
}
export default MobileCrousel;