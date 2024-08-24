import React from "react";
import { Element } from "react-scroll";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import OurCommunity from "./ourCommunity/OurCommunity";
import OurCorporation from "./ourCorporation/OurCorporation";
import Contact from "./contact/Contact";
import Authentication from "./authentication/Authentication";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoading } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        dispatch(
          loginUser({
            username: currentUser.displayName,
            email: currentUser.email,
            uid: currentUser.uid,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("user is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Element name="home">
          <Home />
        </Element>
        <Element name="ourCommunitySection">
          <OurCommunity />
        </Element>
        <Element name="ourCorporationSection">
          <OurCorporation />
        </Element>
        <Element name="contactSection">
          <Contact />
        </Element>
        <Element name="authSection">
          <Authentication />
        </Element>
      </div>
    </div>
  );
}

export default App;
