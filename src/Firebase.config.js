import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCs_g712pOH89AvOS4i-PTS5CAzfsfIXXo",
  authDomain: "ecomerce01-13d76.firebaseapp.com",
  projectId: "ecomerce01-13d76",
  storageBucket: "ecomerce01-13d76.firebasestorage.app",
  messagingSenderId: "63307200376",
  appId: "1:63307200376:web:0510d6552dfc97ced57a8d"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let auth = getAuth(app);
export  {auth}