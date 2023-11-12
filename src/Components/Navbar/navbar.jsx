import React from 'react';
import style from "./styles.module.scss";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
export const Navbar = ( ) => {
return(
<div className={style.navbarWrapper}>
  <div className={style.navbar}>
    <div className={style.listComponents}>
      <li><ScrollLink to="home" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-home fa-2x i"></i></ScrollLink></li>
      <li><ScrollLink to="about" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-user fa-2x i"></i></ScrollLink></li>
      <li><ScrollLink to="education" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-graduation-cap fa-2x i"></i></ScrollLink></li>
      <li><ScrollLink to="experience" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-briefcase fa-2x i"></i></ScrollLink></li>
      {/* <li><ScrollLink to="projects" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-home fa-2x i">   Projects</ScrollLink></li> */}
      <li><ScrollLink to="contact" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>
      <i class="fas fa-envelope fa-2x i"></i></ScrollLink></li>
    </div>
  </div>
</div>
);
};