import style from "./styles.module.scss";
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const Home = () => {
  const strings = [' a Front-end developer.', ' a Back-end developer.' , ' a Freelancer.'];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80;
  const deletingSpeed = 80;
  const delayBetweenStrings = 2500;

  useEffect(() => {
    const type = () => {
      const currentString = strings[currentStringIndex];
      setCurrentText((prevText) => {
        if (!isDeleting && prevText.length === currentString.length) {
          setIsDeleting(true);
          return prevText;
        }

        if (isDeleting && prevText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          return prevText;
        }

        if (isDeleting) {
          return prevText.slice(0, -1);
        }

        return currentString.slice(0, prevText.length + 1);
      });
    };

    const typingTimer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentStringIndex, currentText, isDeleting]);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDeleting(true);
    }, delayBetweenStrings);

    return () => clearTimeout(delayTimer);
  }, [currentStringIndex]);

  const resumeUrl = 'https://drive.google.com/file/d/17PCuf-MX5nlxYhwR27CeZ__usFDO5Q4D/view?usp=drive_link'; // Replace this with the actual URL of your resume file
  const fileName = 'MoizResume.pdf'; // Replace this with the desired file name

  const githubUrl = 'https://github.com/Moizajmal2456';
  const linkedinUrl = 'https://www.linkedin.com/in/moiz-ajmal';
  const gmailUrl = 'https://moizajmal2456@gmail.com';

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRedirectGithub = () => {
    const link = document.createElement('a');
    link.href = githubUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleRedirectLinkedin = () => {
    const link = document.createElement('a');
    link.href = linkedinUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleRedirectGmail = () => {
    const link = document.createElement('a');
    link.href = gmailUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
  <div className={style.homeWrapper} id="home">
    <div className={style.leftSection}>
      <div className={style.imageSection}>
      <img src="/Images/MoizPic3.jpg" alt="My Pic"/>
      </div>
      <div className={style.content}>
      <h1>Moiz Ajmal</h1>
       <div className={style.writtenText}>
        <p>I am {currentText}</p>
        <p>My name is Moiz Ajmal. I am Mern Stack developer
        with six months experience. I have intermediate experience
        in Frontend development using React Js and inbackend development using Node Js.</p>
       </div>
       <div className={style.linksImages}>
         <i onClick={handleRedirectGithub} class="fab fa-github fa-2x i"></i>
         <i onClick={handleRedirectLinkedin} class="fab fa-linkedin fa-2x i"></i>
         <i class="fab fa-instagram fa-2x i" ></i>
         <i onClick={handleRedirectGmail} class="fas fa-envelope fa-2x i"></i>
       </div>
       <div className={style.buttonWrap}>
       <button><ScrollLink to="contact" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>Hire Me</ScrollLink></button>
         <button onClick={handleResumeDownload}>My Resume </button>
       </div>
    </div>
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
};
