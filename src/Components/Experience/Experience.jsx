import style from "./styles.module.scss";
export const Experience = () => {
return(
<div className={style.experienceWrapper}>
        <h1>Experience</h1>
    <div  className={style.cardsWrapper}>
      <div className={style.geekybugs}>
      <h2>Internship</h2>
       <p>Software Development</p>
       <p>Geekybugs Lahore</p>
       <p>3 months work experience as React Js intern</p>
      </div>
      <div className={style.exd}>
      <h2>Bootcamp</h2>
       <p>Mern Stack</p>
       <p>Excellence Delivered</p>
       <p>3 months Mern stack experience</p>
      </div>
    </div>
</div>    
);
};