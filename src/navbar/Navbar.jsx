import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../Firebase";

const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const [dropdown, setDropdown] = useState({
    ourCommunity: false,
    ourCorporation: false,
    buyAndSell: false,
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        console.log("user is logout successfully");
      })
      .catch((error) => {
        console.log("Error logging out:", error.message);
      });
  };

  const toggleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img src="/meta_eyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ==.webp" alt="" />
          <div className="home-title">JOHNSVIEW VILLAGE</div>
        </div>
        <div className="right">
          <div className="links">
            <ScrollLink to="home" smooth={true} duration={500} className="home">
              Home
            </ScrollLink>
            <div
              className="ourCommunity"
              onClick={() => toggleDropdown("ourCommunity")}
              onMouseEnter={() => toggleDropdown("ourCommunity")}
              onMouseLeave={() => toggleDropdown("ourCommunity")}
            >
              <ScrollLink
                to="ourCommunitySection"
                smooth={true}
                duration={500}
                className="ourCommunity"
              >
                Our Community
              </ScrollLink>
              {dropdown.ourCommunity && (
                <div className="dropdown">
                  <div className="dropdown-item">About Our Community</div>
                  <div className="dropdown-item">Emergencies</div>
                  <div className="dropdown-item">Parking</div>
                  <div className="dropdown-item">Garbage & Recycling</div>
                  <div className="dropdown-item">Newsletters</div>
                  <div className="dropdown-item">Social Committee Events</div>
                  <div
                    className="dropdown-item"
                    onClick={() => toggleDropdown("buyAndSell")}
                    onMouseEnter={() => toggleDropdown("buyAndSell")}
                    onMouseLeave={() => toggleDropdown("buyAndSell")}
                  >
                    Buy & Sell
                  </div>
                  <div>
                    {dropdown.buyAndSell && (
                      <div className="child-dropdown">
                        <div className="child-dropdown-item">
                          Submit Items to Sale
                        </div>
                        <div className="child-dropdown-item">
                          View Items to Sale
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="dropdown-item">Merchant Listing</div>
                  <div className="dropdown-item">Link & Refrences</div>
                </div>
              )}
            </div>
            <div
              className="ourCorporation"
              onClick={() => toggleDropdown("ourCorporation")}
              onMouseEnter={() => toggleDropdown("ourCorporation")}
              onMouseLeave={() => toggleDropdown("ourCorporation")}
            >
              <ScrollLink
                to="ourCorporationSection"
                smooth={true}
                duration={500}
                className="ourCorporation"
              >
                Our Corporation
              </ScrollLink>
              {dropdown.ourCorporation && (
                <div className="dropdown">
                  <div className="dropdown-item">About Our Corporation</div>
                  <div className="dropdown-item">Common Elements</div>
                  <div className="dropdown-item">Work Orders</div>
                  <div className="dropdown-item">Renovations In Your Home</div>
                  <div className="dropdown-item">Corporation Documents</div>
                  <div className="dropdown-item">Corporation Forms</div>
                  <div className="dropdown-item">Corporation Policies</div>
                </div>
              )}
            </div>
            <ScrollLink to="contactSection" smooth={true} duration={500}>
              <div className="contactUs">Contact Us</div>
            </ScrollLink>

            <div className="login-area">
              {user && (
                <div className="welcome-message">
                  Welcome, {user.username || user.email}!
                </div>
              )}
              <ScrollLink to="authSection" smooth={true} duration={500}>
                <button
                  className="button-shared"
                  onClick={user ? handleLogout : null}
                >
                  {user ? "logout" : "login"}
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
