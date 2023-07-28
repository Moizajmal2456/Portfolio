import React from "react";
import style from "./styles.module.scss";

export const Cards = ({class1 ,  subject , institute , marks , buttonText}) => {
return(
<div className={style.school}>
    <h2>{class1}</h2>
    <p>{subject}</p>
    <p>{institute}</p>
    <p>{marks}</p>
    <button>{buttonText}</button>
</div>
);
};