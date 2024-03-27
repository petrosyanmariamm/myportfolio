import React, { useState } from "react";
import "../Footer/footer.scss";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Map from "./Map";

export default function Footer() {
 
  const [social] = useState([
                             {icon:<FaGithub />, href:"https://github.com/petrosyanmariamm"},
                             {icon:<SiVercel />, href:"https://vercel.com/mariams-projects-29e89ccf"},
                             {icon:<FaLinkedinIn />, href:"https://www.linkedin.com/in/mariam-petrosyan-4a1453287/"},
                             {icon:<FaInstagram />, href:"https://www.instagram.com/"},
                             {icon:<FaXTwitter />, href:"https://twitter.com/home"},
                            
                            ]);
  
  return (
    <footer>
      
      <Map/>
     
      <div className="socialLinks">
      <p>In today’s digital age, your website is one of the most valuable assets your business has. Our web development service combines creativity with functionality to build a captivating website that enhances your online presence. With our commitment to providing responsive designs, you can be sure your website will look and feel great on any device.</p>

            {
              social.map((el, index )=> <a key={index} href={el.href}>{el.icon}</a>)
            }
      </div>
      
      <div className="created">
      <p>created by Mariam</p>
     
      </div>
     
    </footer>
  )
}
