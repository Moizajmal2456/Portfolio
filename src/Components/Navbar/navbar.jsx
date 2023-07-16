import React from 'react';
import style from "./styles.module.scss";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
export const Navbar = ( ) => {
return(
<div className={style.navbarWrapper}>
    <div className={style.listComponents}>
        <li><ScrollLink to="home" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            About</ScrollLink></li>
        <li><ScrollLink to="education" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            Education</ScrollLink></li>
        <li><ScrollLink to="experience" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            Experience</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            Projects</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
            Contact Us</ScrollLink></li>
    </div>
</div>
);
};