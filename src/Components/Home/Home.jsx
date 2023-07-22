import style from "./styles.module.scss";
import React, { useState, useEffect } from 'react';
import { ScrollLink } from "react-scroll";

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <div className={style.homeWrapper} id="home">
    <div className={style.leftSection}>
      <h1>Moiz Ajmal</h1>
    <div className={style.writtenText}>
    <p>
      I am {currentText}
      </p>
    </div>
    <div className={style.linksImages}>
      <a href="https://github.com/Moizajmal2456"> <i class="fab fa-github fa-2x i"></i></a>
     <a href="https://www.linkedin.com/in/moizajmal"><i class="fab fa-linkedin fa-2x i"></i></a>
     <a><i class="fab fa-instagram fa-2x i" ></i></a>
     <a href="moizajmal2456@gmail.com"> <i class="fas fa-envelope fa-2x i"></i></a>
    </div>
    <div className={style.buttonWrap}>
    <button>Hire Me</button>
    <button onClick={handleDownload}>My Resume </button>
    </div>
    </div>
    <div className={style.rightSection}>
      <img src="/Images/MoizPic.jpg" alt="My Pic"/>
    </div>
</div>
);
};
