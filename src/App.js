import { Home }from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Experience } from "./Components/Experience/Experience";
import { Skills } from "./Components/Skills/Skills";
import { Education } from "./Components/Education/Education";
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyATUrbhZfM1Ob1jVxrfelloEf1I8aWKfjk",
    authDomain: "moizajmalportfolio-80d65.firebaseapp.com",
    databaseURL: "https://moizajmalportfolio-80d65-default-rtdb.firebaseio.com",
    projectId: "moizajmalportfolio-80d65",
    storageBucket: "moizajmalportfolio-80d65.appspot.com",
    messagingSenderId: "321656466871",
    appId: "1:321656466871:web:30de0d45f05b7ab1268c32"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
  <>
    <Navbar/>
    <Home/>
    <About/> 
    <Education/>
    <Experience/>
    <Skills/>
    <ContactUs/>
    </>
  );
}

export default App;
