// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDntju3GkHtwAzbjL5HfaGF8w0ZhP8K8FE",
    authDomain: "b610-learning-platform-c-9ac6f.firebaseapp.com",
    projectId: "b610-learning-platform-c-9ac6f",
    storageBucket: "b610-learning-platform-c-9ac6f.appspot.com",
    messagingSenderId: "188484250305",
    appId: "1:188484250305:web:b31ca6145c4da895a18240"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;