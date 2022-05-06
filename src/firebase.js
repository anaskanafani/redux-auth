import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAX_THLTWJ0WfY9IGvfEP5yVSidi3BkWNw",
  authDomain: "login-demo-7265e.firebaseapp.com",
  projectId: "login-demo-7265e",
  storageBucket: "login-demo-7265e.appspot.com",
  messagingSenderId: "115669184785",
  appId: "1:115669184785:web:bc7259dc4fa016019d1cb0"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; 
