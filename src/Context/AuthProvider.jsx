import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../CustomHooks/useAxiosPublic";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [payAmount, setPayAmount] = useState();
  const [user, setUser] = useState(true);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();
  const provider = new GoogleAuthProvider();

  //manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser === null || currentUser?.email) {
        const userInfo = { email: currentUser?.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //implement login with google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  //update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  //logout a user
  const logOut = () => {
    return signOut(auth);
  };
  const handlePayAmount = (e) => {
    const amount = e.target.value;
   setPayAmount(amount);
   return payAmount
  };
  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    updateUserProfile,
    logOut,
    handlePayAmount,
    payAmount,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
