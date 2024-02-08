import React from 'react'
import "./Scrool.css"
import { CgScrollV } from "react-icons/cg";
function Scrool() {
    window.addEventListener("scroll",function(){
        const scrollup = document.querySelector(".scroolbars");
        if(this.scrollY >= 100) scrollup.classList.add("scrool-show")
         else scrollup.classList.remove("scrool-show");
    })
  return (
    <a href='#' className='scroolbars'>
      <CgScrollV className='scroolbar' />
    </a>
  )
}

export default Scrool
