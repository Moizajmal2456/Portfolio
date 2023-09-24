import { useState } from "react";
import React from "react";
import style from "./styles.module.scss";

const geekybugsCertificate = "https://drive.google.com/file/d/1jlURHxtA_TmyjUlfb4e7fvfHVoLZhnc0/view?usp=drive_link";
const exdCertificate = "https://drive.google.com/file/d/14hQQADPWjR6AZHXzSvCWnz_xKWTU-tO8/view?usp=drive_link";
const link = document.createElement('a');

export const ExperienceCards = ({class1,  subject, institute, marks, buttonText}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

    const handleClick = () => {
        switch (class1) {
            case "Internship":
            link.href = geekybugsCertificate;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
            case "Bootcamp":
            link.href = exdCertificate;
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
    <h2>{class1}</h2>
    <p>{subject}</p>
    <p>{institute}</p>
    <p>{marks}</p>
    <button onClick={() => handleClick()}>{buttonText}</button>
</div>
);
};