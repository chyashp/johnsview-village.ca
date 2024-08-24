import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase";
import "./Signup.scss"

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .then(() => {
        // After updating profile, sign in the user
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(() => {
        console.log("User signed up and signed in successfully");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  return (
    <div className="signup">
      <div className="wrapper">
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
          className="input-signup"
            type="text"
            placeholder="enter your email.."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-box">
          <input
          className="input-signup"
            type="text"
            placeholder="enter your username.."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="input-box">
          <input
          className="input-signup"
            type="password"
            placeholder="enter your passsword.."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="signup-btn" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
