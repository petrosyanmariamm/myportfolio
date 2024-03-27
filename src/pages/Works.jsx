import React, { useState } from "react";
import "../pageStyles/works.scss";
import travel from "../images/travel.avif";
import meal from "../images/meal.avif";
import movieology from "../images/movie.avif";
import shelby from "../images/shelby.avif";
import MyCarousel from "../components/MyCarousel/MyCarousel";
export const  WorksContext = React.createContext([]);

export default function Works() {

const [cards] = useState([{img:travel, title:"Travel", descr:"HTML5, CSS"},
                          {img:meal, title:"Meal Shop", descr:"HTML5, Tailwind Css, JavaScript, React"},
                          {img:movieology, title:"Movieology", descr:"HTML5, CSS, JavaScript, React"},
                          {img:shelby, title:"Shelby", descr:"HTML5, SCSS, JavaScript, React"},
                          ]);

                  
  return (
    <WorksContext.Provider value={cards}>
         <div className="works">
          <MyCarousel/>
         </div>
    </WorksContext.Provider>
   
  )
}
