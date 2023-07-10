import React from 'react';
import style from "./styles.module.scss";
export const Navbar = ( ) => {
return(
<div className={style.navbarWrapper}>
    <div className={style.listComponents}>
        <li>Home</li>
        <li>About</li>
        <li>Education</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact Us</li>
    </div>
</div>
);
};