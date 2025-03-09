import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlbsViXXMb0h9B9gkktADkTk1u09FeLaY",
    authDomain: "portfolio-counter-d086a.firebaseapp.com",
    databaseURL: "https://portfolio-counter-d086a-default-rtdb.firebaseio.com",
    projectId: "portfolio-counter-d086a",
    storageBucket: "portfolio-counter-d086a.firebasestorage.app",
    messagingSenderId: "227083493962",
    appId: "1:227083493962:web:4916987d67ba08b4d63cb3",
    measurementId: "G-ZP5XGB8X45"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  export { database, ref, get, set };   