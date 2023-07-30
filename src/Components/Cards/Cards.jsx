import React from "react";
import style from "./styles.module.scss";

const interUrl = "https://drive.google.com/file/d/11p5niiiOl3zUJwvnoRvH9rD36svb0YJU/view?usp=drive_link";
const bsUrl = "https://drive.google.com/file/d/1t7zF4C4ArNkG8tzgEnx68fxi4AXQVkNl/view?usp=drive_link";
const link = document.createElement('a');

export const Cards = ({class1 ,  subject , institute , marks , buttonText}) => {
    const handleClick = () => {
        switch (class1) {
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
<div className={style.school}>
    <h2>{class1}</h2>
    <p>{subject}</p>
    <p>{institute}</p>
    <p>{marks}</p>
    <button onClick={() => handleClick()}>{buttonText}</button>
</div>
);
};