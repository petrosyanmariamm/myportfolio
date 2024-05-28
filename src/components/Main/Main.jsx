import React, { useState} from "react";
import "./main.scss";
import img from "../../images/img.avif";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { MdOutlineMarkunread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import CV from "./cv.pdf";

export default function Main() {
  const [social] = useState([{icon:<FaLinkedinIn />, href:"https://www.linkedin.com/in/mariam-petrosyan-4a1453287/"},
                             {icon:<FaGithub />, href:"https://github.com/petrosyanmariamm"},
                             {icon:<SiVercel />, href:"https://vercel.com/mariams-projects-29e89ccf"}]);
                 
  return (
    
    <div className="main">
      <div className="leftBlock">
        <h5>hello I"am</h5>
        <h2>mariam petrosyan</h2>
        <p>web developer</p>
      </div>
      <div className="rightBlock">
            <div className="img"> 
              <img src={img}/>
            </div>
            <p className="text">building innovative solutions together</p>
            <a className="email" href="mailto:mariampetrosyan924@gmail.com"><MdOutlineMarkunread /> mariampetrosyan924@gmail.com</a>
            <a className="number" href="tel:+37495152415"><IoCall /> +374 95 15 24 15</a>
            <div className="socialLinks">
                {
                  social.map((el, index) => <a key={index} href={el.href} target="_blank">{el.icon}</a>)
                }
            </div>
            <a className="btn" href={CV} target="_blank">download cV</a>
      </div>
    </div>
  )
}
