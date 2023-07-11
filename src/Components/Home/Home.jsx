import style from "./styles.module.scss";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const strings = ['My name is Moiz Ajmal.', 'I am Front-end developer.', 'I am a Back-end developer.'];
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 80;
  const deletingSpeed = 50;
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

  return (
  <div className={style.homeWrapper}>
    <div className={style.writtenText}>
    {currentText}
    </div>
    <div className={style.linksImages}>
     <img src="/Images/githubLogo.png" alt="Github Logo"/>
     <img src="/Images/linkedinLogo.png" alt="Linkedin Logo"/>
     <img src="/Images/instagramLogo.png" alt="Instagram Logo"/>
    </div>
</div>
);
};

export default Home;