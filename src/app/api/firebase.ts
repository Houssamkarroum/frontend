import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  apiKey: "AIzaSyARR2i-iCy7xMw6LUeE0jMtykZdJs98HYI",
  authDomain: "eplfeed-e9f3b.firebaseapp.com",
  projectId: "eplfeed-e9f3b",
  storageBucket: "eplfeed-e9f3b.appspot.com",
  messagingSenderId: "576320315971",
  appId: "1:576320315971:web:64b101ddeff32cc0feaaf6",
  measurementId: "G-1ESHHW8ZES"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
