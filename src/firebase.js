import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyB6cn_XtzEWqQByOemAGlPDyKaPSZZRwPk",
    authDomain: "moizajmalportfolio.firebaseapp.com",
    projectId: "moizajmalportfolio",
    storageBucket: "moizajmalportfolio.appspot.com",
    messagingSenderId: "445597153226",
    appId: "1:445597153226:web:b5de3fb5f2b96ab8324133"
  };

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  export default database;