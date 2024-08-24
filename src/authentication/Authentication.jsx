import React, { useState } from "react";
import "./authentication.scss";
import SignUp from "./signup/Signup";
import Login from "./login/Login";
import { useSelector } from "react-redux";
import User from "../user/User";

function Authentication() {
  const [active, setActive] = useState("login");
  const user = useSelector((state) => state.data.user.user);

  const handleClick = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  if (user) {
    return (
      <User/>
    );
  }

  return (
    <div className="authentication">
      <div className="auth__box">
        <div className="page">
          {active === "login" ? <Login /> : <SignUp />}
        </div>
        <div className="question">
          {active === "login" ? (
            <>
              <span>Don't have an account?</span>
              <button onClick={handleClick}>Sign Up</button>
            </>
          ) : (
            <>
              <span>Have an account?</span>
              <button onClick={handleClick}>Log in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
