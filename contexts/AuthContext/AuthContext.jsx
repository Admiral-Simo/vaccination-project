import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useRouter } from "next/router";

const AuthContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyA43veP1mJfVHW2RJPw1-87TZCv0PQv0Vo",
  authDomain: "vaccination-app-eac9c.firebaseapp.com",
  projectId: "vaccination-app-eac9c",
  storageBucket: "vaccination-app-eac9c.appspot.com",
  messagingSenderId: "241807816048",
  appId: "1:241807816048:web:7b2e4c90809f8aae75cbb5",
};

const app = initializeApp(firebaseConfig);

function AuthProvider({ children }) {
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const router = useRouter();
  const auth = getAuth(app);

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setError(err.message);
    });
  };

  const SignOut = () => {
    signOut(auth);
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push("/");
      } else {
        setUser("");
        router.push("/auth");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
