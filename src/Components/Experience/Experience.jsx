// import React, { useEffect, useRef, useState} from "react";
// import { ExperienceData } from "../../Data/Data";
// import { Cards } from "../Cards/Cards";
// import style from "./styles.module.scss";
// import Slider from "react-slick";

// export const Experience = () => {

//   const settings = {
//     dots: true, // Show navigation dots
//     slidesToShow: 2, // Show one card at a time
//     slidesToScroll: 1, // Number of slides to scroll at a time
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Autoplay speed in milliseconds (adjust as needed)
//     infinite: true, // Loop the carousel
//   };

//   const [isVisible, setIsVisible] = useState(false);
//   const componentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       });
//     });

//     if (componentRef.current) {
//       observer.observe(componentRef.current);
//     }

//     return () => {
//       if (componentRef.current) {
//         observer.unobserve(componentRef.current);
//       }
//     };
//   }, []);

// return(
// <div className={style.experienceWrapper} id="experience">
//   <h1>Experience</h1>
//     <div ref={componentRef}  className={`${style.cardsWrapper} ${isVisible ? style.visible : ""}`}>
//        {ExperienceData.map (data => {
//          return(
//            <Cards
//            class={data.type}
//            subject={data.technology}
//            institute={data.office}
//            marks={data.experience}
//            buttonText={data.buttonText}
//            />
//            )})
//           }
//     </div>
// </div>    
// );
// };

import React, { useEffect, useRef, useState } from "react";
import style from "./styles.module.scss";
import { ExperienceData } from "../../Data/Data";
import { Cards } from "../Cards/Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export const Experience = () => {
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
  return (
    <div className={style.experienceWrapper} id="experience">
      <h1>Experience</h1>
      <div ref={componentRef}  className={`${style.cardsWrapper} ${isVisible ? style.visible : ""}`}>
        <Slider {...settings}>
          {ExperienceData.map((data) => {
            return (
                <Cards
                  class1={data.type}
                  subject={data.technology}
                  institute={data.office}
                  marks={data.experience}
                  buttonText={data.buttonText}
                />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};