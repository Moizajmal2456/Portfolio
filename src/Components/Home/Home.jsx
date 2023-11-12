import style from "./styles.module.scss";
import React, { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const Home = () => {
  const strings = ['am a Front-end developer.', 'am a Back-end developer.' , 'am a Freelancer.'];
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

  const resumeUrl = 'https://drive.google.com/file/d/14SozpYC_9Ce6-8kY3ke9ygloL_Ep0YAT/view?usp=drive_link'; // Replace this with the actual URL of your resume file
  const fileName = 'MoizResume.pdf'; 

  const githubUrl = 'https://github.com/Moizajmal2456';
  const linkedinUrl = 'https://www.linkedin.com/in/moiz-ajmal';
  const gmailUrl = 'https://moizajmal2456@gmail.com';
  const instagramUrl = 'https://instagram.com/moiz.ajmal?igshid=OGQ5ZDc2ODk2ZA==';
  const facebookUrl = 'https://www.facebook.com/moizajmal.moizajmal?mibextid=ZbWKwL';

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

  const handleRedirectInstagram = () => {
    const link = document.createElement('a');
    link.href = instagramUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleRedirectFacebook = () => {
    const link = document.createElement('a');
    link.href = facebookUrl;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
  <div className={style.homeWrapper} id="home">
    <div ref={componentRef} className={`${style.leftSection} ${isVisible ? style.visible : ""}`}>
     <h1>Moiz Ajmal</h1>
      <div className={style.writtenText}>
        <p>I {currentText}</p>
      </div>
      <div className={style.linksImages}>
        <i onClick={handleRedirectGithub} class="fab fa-github fa-2x i"></i>
        <i onClick={handleRedirectFacebook} class="fab fa-facebook fa-2x i"></i>
        <i onClick={handleRedirectLinkedin} class="fab fa-linkedin fa-2x i"></i>
        <i onClick={handleRedirectInstagram} class="fab fa-instagram fa-2x i" ></i>
        <i onClick={handleRedirectGmail} class="fas fa-envelope fa-2x i"></i>
      </div>
      <div className={style.buttonWrap}>
        <button><ScrollLink to="contact" smooth={true} duration={1000} spy={true} exact="true" offset={-80}>Hire Me</ScrollLink></button>
        <button onClick={handleResumeDownload}>My Resume </button>
      </div>
   </div>
   <div ref={componentRef} className={`${style.rightSection} ${isVisible ? style.visible : ""}`}>
     <div className={style.imageSection}>
       <img src="/Images/MoizPic6.jpg" alt="My Pic"/>
     </div>
    </div>
 </div>
);
};
