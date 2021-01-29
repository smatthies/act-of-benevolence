import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => (
  <nav className="nav">
    <Link to="/stories">stories</Link>
    <Link to="/events">events</Link>
    <Link to="/tshirts">tshirts</Link>
    <Link to="/videos">videos</Link>
    <Link to="/books">books</Link>
    <Link to="/wtmg">where the money goes</Link>
  </nav>
);

export default Nav;
