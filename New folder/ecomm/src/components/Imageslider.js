import React from 'react'
import { useEffect } from "react";
import styled from "styled-components"
import Image from "../img/img_snow_wide.jpg"
import Image1 from "../img/img_nature_wide.jpg"
import Image2 from "../img/img_mountains_wide.jpg"

export default function Imageslider() {
    useEffect(() => {
      let slideIndex = 0;

      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
      }
      showSlides();
    });

  const WRAPPER = styled.section`
        .mySlides {
            display: none;
        }
        img {
            vertical-align: middle;
            width: 1500px;
        }

        /* Slideshow container */
        .slideshow-container {
        max-width: 1500px;
        position: relative;
        margin: auto;
        }

        /* Caption text */
        .text {
        color: #f2f2f2;
        font-size: 15px;
        padding: 8px 12px;
        position: absolute;
        bottom: 8px;
        width: 100%;
        text-align: center;
        }

        /* Number text (1/3 etc) */
        .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
        }

        /* The dots/bullets/indicators */
        .dot {
        height: 15px;
        width: 15px;
        margin: 0 2px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        }

        .active {
        background-color: #717171;
        }
        .dots{
            text-align: center;
        }

        /* Fading animation */
        .fade {
        animation-name: fade;
        /* animation-duration: 1s; */
        }

        @keyframes fade {
        from {opacity: .4} 
        to {opacity: 1}
        }

        /* On smaller screens, decrease text size */
        @media only screen and (max-width: 300px) {
        .text {font-size: 11px}
        }
    `;
  return (
    <WRAPPER>
   
        <div className="slideshow-container">

            <div className="mySlides fade">
                <div className="numbertext"></div>
                <img src={Image} alt=''/>
                <div className="text">Best Selling</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext"></div>
                <img src={Image1}alt='' />
                <div className="text">Best Selling</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext"></div>
                <img src={Image2} alt=''/>
                <div className="text">Best Selling</div>
            </div>

            <br/>

            <div className="dots">
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
            </div>
        </div>
   
    </WRAPPER>
  )
}
