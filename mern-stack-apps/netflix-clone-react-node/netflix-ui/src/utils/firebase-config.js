import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: "AIzaSyC1Hf0_rdWLBzDPJPcO9CJN4y6M6-EgKH4",
  // authDomain: "react-auth-6788d.firebaseapp.com",
  // projectId: "react-auth-6788d",
  // storageBucket: "react-auth-6788d.appspot.com",
  // messagingSenderId: "131797845021",
  // appId: "1:131797845021:web:3f7ff4766e2b89ca5d32f4",
  // measurementId: "G-VWPBR1NSLL",

  apiKey: "AIzaSyD6xZ1ltJnNl9gaQQio4opnz16dYSQC_pc",
  authDomain: "react-netflix-clone-81163.firebaseapp.com",
  projectId: "react-netflix-clone-81163",
  storageBucket: "react-netflix-clone-81163.appspot.com",
  messagingSenderId: "37011654472",
  appId: "1:37011654472:web:f6db7ec198add1c30f157d",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
