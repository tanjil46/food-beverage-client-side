// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl25Xd4NAFCBXi9Pov3FcQd59B3lMgiB0",
  authDomain: "food-beverage-user.firebaseapp.com",
  projectId: "food-beverage-user",
  storageBucket: "food-beverage-user.appspot.com",
  messagingSenderId: "1015712788144",
  appId: "1:1015712788144:web:d8c21cf681642809be1575"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)


export default auth