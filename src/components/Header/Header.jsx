import React, {useState } from "react";
import "./header.scss";
import logo from"../../images/mylogo.avif";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [inActive, setInActive] = useState(true);
  const navigate = useNavigate(); 
 
  const [pages] = useState([
                           {title:"home", href:"/"},
                           {title:"about me", href:"/about"},
                           {title:"works", href:"/works"},
                           {title:"contact", href:"/contact"}
                          ]);
                                                  
  return (
    <header>
      <div className="logo" onClick={()=> navigate("/")}>
        <img src={logo} alt="logo"/> 
      </div>

      <div onClick={()=>setInActive(!inActive)}>{!inActive?<GrClose className="burgerMenu"/>:<GiHamburgerMenu className="burgerMenu"/>}</div>
      <nav  className={inActive?"navbar":"navbar active"} onClick={()=> setInActive(true)}>
        {
          pages.map((el, index) => <Link  className={inActive? "link":"link active"} to={el.href} key={index}>{el.title}</Link>)
        } 
      </nav>
    </header>
  )
}
