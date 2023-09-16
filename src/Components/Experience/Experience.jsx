import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Experience = () => {

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
  };

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

return(
<div className={style.experienceWrapper} id="experience">
  <h1>Experience</h1>
    <div ref={componentRef}  className={`${style.cardsWrapper} ${isVisible ? style.visible : ""}`}>
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
        {/* <img src="/Images/School.png" alt="school"/> */}
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
    </div>
</div>    
);
};

