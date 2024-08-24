import React, { useState } from "react";
import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(()=>{
        console.log("User signed up and signed in successfully");
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="login-title">Login</h1>
        <div className="input-box">
          <input
            className="input-container"
            type="text"
            placeholder="enter your email.."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="input-box">
          <input
          className="input-container"
            type="password"
            placeholder="enter your passsword.."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
