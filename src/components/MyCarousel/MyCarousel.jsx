import React, { useContext, useState } from "react";
import "../MyCarousel/myCarousel.scss";
import Carousel from "react-bootstrap/Carousel";
import { SiVercel } from "react-icons/si";
import { WorksContext } from "../../pages/Works";

export default function MyCarousel() {
    const myWorks = useContext(WorksContext);
    const [links] = useState([{title:"Travel", href:"https://travel-one-rouge.vercel.app/"}, 
                              {title:"Shelby",href:"https://shelby-tawny.vercel.app/"},
                              {title:"Movieology",href:"https://movieology.vercel.app/"},
                              {title:"MealShop",href:"https://meal-shop.vercel.app/"} 
                              ]);      
  return (
    <div className="myCarousel">
        <Carousel>
            {
                myWorks.map((el, index) => <Carousel.Item key={index}>
                    <img className="img" src={el.img} alt="img"/> 
                   <Carousel.Caption>
                     <h3>{el.title}</h3>
                     <p>{el.descr}</p>
                   </Carousel.Caption>
                   </Carousel.Item>
                   )
            }
        </Carousel>
        <div className="linksBox">
          {
            links.map((elem,index) => <a className="btn" target="_blank" rel="noreferrer" key={index} href={elem.href}>{elem.title}<SiVercel /></a>)
          }
          </div>
    </div>
  )
}
