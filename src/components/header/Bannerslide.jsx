import React, { useState, useEffect } from 'react';
import './Banner.css'; // Assuming you have the CSS in a separate file

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
  
    useEffect(() => {
      const interval = setInterval(() => {
        plusSlides(1);
      }, 4000);
      return () => clearInterval(interval);
    }, [slideIndex]);
  
    const plusSlides = (n) => {
      showSlides(slideIndex + n);
    };
  
    const showSlides = (n) => {
      let newIndex = n;
      const slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) {
        newIndex = 1;
      }
      if (n < 1) {
        newIndex = slides.length;
      }
      setSlideIndex(newIndex);
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[newIndex - 1].style.display = "block";
    };
  
    return (
      <div className="slideshow-container">
        <div className="mySlides">
          <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
        </div>
        <div className="mySlides">
          <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
        </div>
        <div className="mySlides">
          <q>I have not failed. I've just found 10,000 ways that won't work.</q>
        </div>
      </div>
    );
  };
  
  export default Slider;
