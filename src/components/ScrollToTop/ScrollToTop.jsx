import React from "react";
import "../ScrollToTop/scrollToTop.scss";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";


export default function ScrollToTop() {

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", scrollTopFunc);
  }, [])

  const scrollTopFunc = () => {
      if (window.scrollY > 320) {
          setShowBtn(true);
      } else {
          setShowBtn(false);
      }
  }

  const handlerScrollTopFunc = () => {
      scroll.scrollToTop();
  }
  return  showBtn && (
        <div className="ScrollTop" onClick={handlerScrollTopFunc}>
           <FaArrowAltCircleUp />
        </div>
  )
}
