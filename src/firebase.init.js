// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUI8UiVrmkBmrnxgZuAnqpyAQ3q3KZRlM",
  authDomain: "the-nutras.firebaseapp.com",
  projectId: "the-nutras",
  storageBucket: "the-nutras.appspot.com",
  messagingSenderId: "1016800242204",
  appId: "1:1016800242204:web:e18aba759aa9f54e62cdd9",
  measurementId: "G-5JN7KQF5NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);    
export default auth;