import { useState } from "react";
import React from "react";
import style from "./styles.module.scss";

const interUrl = "https://drive.google.com/file/d/11p5niiiOl3zUJwvnoRvH9rD36svb0YJU/view?usp=drive_link";
const bsUrl = "https://drive.google.com/file/d/1t7zF4C4ArNkG8tzgEnx68fxi4AXQVkNl/view?usp=drive_link";
const marticUrl = "https://drive.google.com/file/d/1q1ukiNP9Bt3sZ8OQiYOeayT7Xfbm7_ns/view?usp=drive_link";
const link = document.createElement('a');

export const Cards = ({class1,  subject, institute, marks, buttonText, imgSource}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    const handleClick = () => {
        switch (class1) {
          case "Matric":
            link.href = marticUrl;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
          case "Intermediate":
            link.href = interUrl;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
          case "Bachelors":
            link.href = bsUrl;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
          default:
            break;
        }
      };

return(
<div className={style.card}>
  <div className={style.inner}>
    <div className={style.frontCard}>
     <img src={imgSource} alt="Card Image" />
    </div>
    <div className={style.backCard}>
     <h2>{class1}</h2> 
     <p>{subject}</p>
     <p>{institute}</p>
     <p>{marks}</p>
     <button onClick={() => handleClick()}>{buttonText}</button>
    </div>
  </div>
</div>
);
};