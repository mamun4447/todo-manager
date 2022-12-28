import React, { createContext, useState } from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  //<===< User Sing Up >===>
  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //<===< User sign in >===>
  const userLogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //<===< SingIn with Gmail >===>//
  const signInWithGmail = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  //<<===< Sign Out >===>>//
  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  //<===< set Name >===>//
  // const setName = (name) => {
  //   setLoader(true);
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //   });
  // };

  //<==< Set User >==>//
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loader,
    userLogIn,
    // setName,
    LogOut,
    signInWithGmail,
    userSignUp,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
