import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyd_QK5CYvuWhi8wLCZ0RccQBYpEZnFHY",
  authDomain: "react--clone-879a3.firebaseapp.com",
  databaseURL: "https://react--clone-879a3.firebaseio.com",
  projectId: "react--clone-879a3",
  storageBucket: "react--clone-879a3.appspot.com",
  messagingSenderId: "238872435291",
  appId: "1:238872435291:web:8005ebf532e3d7d6837d7e",
  measurementId: "G-B4QQH3DDJ9",
});
// Initialize Firebase
const auth = firebase.auth();

export { auth };