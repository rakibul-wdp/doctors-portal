// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtnS_8zHYQW6stdkB1qmrdSGIgHUHaDSo',
  authDomain: 'doctors-portal-44843.firebaseapp.com',
  projectId: 'doctors-portal-44843',
  storageBucket: 'doctors-portal-44843.appspot.com',
  messagingSenderId: '407978130096',
  appId: '1:407978130096:web:10eb533847f7b927be5975',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
