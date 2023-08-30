import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCn3Yhwm0a-5z3yFYKx-R8lwdld4TVX94w",
  authDomain: "sveltekit-fullstack-8b032.firebaseapp.com",
  projectId: "sveltekit-fullstack-8b032",
  storageBucket: "sveltekit-fullstack-8b032.appspot.com",
  messagingSenderId: "913629835608",
  appId: "1:913629835608:web:66f06c19b4354552e9352d"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);
