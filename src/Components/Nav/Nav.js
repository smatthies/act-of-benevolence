import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Nav.scss";

const Nav = () => {
  const intl = useIntl();
  return (
    <nav className="nav">
      <Link to="/aboutUs">{intl.formatMessage({ id: "menu.aboutUs" })}</Link>
      <Link to="/events">{intl.formatMessage({ id: "menu.events" })}</Link>
      <Link to="/toWear">{intl.formatMessage({ id: "menu.toWear" })}</Link>
      <Link to="/toWatch">{intl.formatMessage({ id: "menu.toWatch" })}</Link>
      <Link to="/toRead">{intl.formatMessage({ id: "menu.toRead" })}</Link>
      <Link to="/partners">{intl.formatMessage({ id: "menu.partners" })}</Link>
    </nav>
  );
};

export default Nav;
