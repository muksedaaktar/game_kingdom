import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAo5RyKTj_Wa92yk0PEDwhK1fJT0DVLesw",
  authDomain: "game-kingdom-breaking.firebaseapp.com",
  projectId: "game-kingdom-breaking",
  storageBucket: "game-kingdom-breaking.firebasestorage.app",
  messagingSenderId: "971093334790",
  appId: "1:971093334790:web:18ed32aba4ffea01d9dc87"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
