import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../../../firebase.init";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  const handleSignPopUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        setUser(currentUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        setUser(null);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <p>Hi there!</p>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleSignPopUp}>Google login</button>
          <button onClick={handleGithubLogin}> GitHub Login</button>
        </>
      )}
      {user && (
        <>
          <img src={user.photoURL} alt="" />
          <h2>User: {user.displayName}</h2>
          <h3>Email: {user.email}</h3>
        </>
      )}
    </div>
  );
};

export default Login;
