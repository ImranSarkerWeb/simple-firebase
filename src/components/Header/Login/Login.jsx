import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../../firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignPopUp = () => {
    console.log("Google mama is comming");
  };
  return (
    <div>
      <p>Hi there!</p>
      <button onClick={handleSignPopUp}>Google login</button>
    </div>
  );
};

export default Login;
