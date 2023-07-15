import style from "./styles.module.scss";

export const About = () => {
return(
<div className={style.aboutWrapper} id="about">   
     <div className={style.leftSection}>
     <h1>About Me</h1>
     <p>My name is Moiz Ajmal. I am Mern Stack developer
      with six months experience. I have good experience in 
      Frontend development using React Js and i am also good
      in backend development using Node Js.</p>
     </div>
     <div className={style.rightSection}>
     <h2>HTML & CSS </h2>
     <p>90%</p>
      <div className={style.progressBar1}>
         <div className={style.progress}></div>
     </div>
     <h2>JavaScript </h2>
     <p>80%</p>
      <div className={style.progressBar2}>
        <div className={style.progress}></div>
      </div>
     <h2>React Js </h2>
     <p>60%</p>
     <div className={style.progressBar3}> 
       <div className={style.progress}></div>
     </div>
</div>
</div>
);
} ;