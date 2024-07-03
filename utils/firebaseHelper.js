// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAYQSDMXynoMvPaV1V5OWeVvDeixQxEwUk",
    authDomain: "whatsapp-zlf.firebaseapp.com",
    // databaseURL: "https://whatsapp-zlf-default-rtdb.firebaseio.com",
    projectId: "whatsapp-zlf",
    storageBucket: "whatsapp-zlf.appspot.com",
    messagingSenderId: "340159672087",
    appId: "1:340159672087:web:64636e383749f1d8b9d152",
    measurementId: "G-99D011JN5W"
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
}