import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyATUrbhZfM1Ob1jVxrfelloEf1I8aWKfjk",
  authDomain: "moizajmalportfolio-80d65.firebaseapp.com",
  databaseURL: "https://moizajmalportfolio-80d65-default-rtdb.firebaseio.com",
  projectId: "moizajmalportfolio-80d65",
  storageBucket: "moizajmalportfolio-80d65.appspot.com",
  messagingSenderId: "321656466871",
  appId: "1:321656466871:web:30de0d45f05b7ab1268c32"
};

  firebase.initializeApp(firebaseConfig);
  export const database1 = firebase.database();
  export default firebase;