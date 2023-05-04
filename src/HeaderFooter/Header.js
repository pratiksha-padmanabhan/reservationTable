// import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import Images from "../assets/images";
import "/Users/pratiksha/pratproj/src/WeekSpecial/WeekSpecial.js";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import React from "react";
import { Redirect } from "react-router-dom";
import BookingForm from "../Booking/BookingForm";

function Header() {
  return (
    <span id="hey123">
      <div>
      <Link to="/">
        <img
          src={Images.logo}
          alt="logo"
          id="uniqueImg"
          style={{
            height: "90px",
            paddingTop: "15px",
            paddingLeft: "15px",
            width: "300px",
            alignItems: "left",
          }}
        ></img></Link>
      </div>
      <div>
        {" "}
        <ul>
          {/* <li>
            <Link smooth to="#ws" className="links">
              {" "}
              hello
            </Link>
          </li> */}
          {/* <li><Link smooth to='#ws' to='/WeekSpecial' > hello</Link></li> */}
          <li>
            <Link className="links">Home</Link>
          </li>
          <li>
            <Link className="links">About</Link>
          </li>
          <li>
            <Link className="links">Menu</Link>
          </li>
          <li>
            <Link to="/BookingForm" className="links">
              Reservations
            </Link>
          </li>
          <li>
            <Link smooth to="/#ws" className="links">Order Online</Link>
          </li>
          <li>
            <Link className="links">Login</Link>
          </li>
        </ul>
      </div>
    </span>
  );
}

export default Header;
