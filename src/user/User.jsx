import React from "react";
import { useSelector } from "react-redux";
import "./User.scss";

function User() {
  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="user">
      <div className="user__box">
        <h2>Welcome, {user.username || user.email}!</h2>
        <p>You are now logged in to your Johnsview's account.</p>
      </div>
    </div>
  );
}

export default User;
