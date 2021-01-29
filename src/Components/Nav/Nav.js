import React from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Nav.scss";

const Nav = () => {
  const intl = useIntl();
  return (
    <nav className="nav">
      <Link to="/stories">{intl.formatMessage({ id: "menu.stories" })}</Link>
      <Link to="/events">{intl.formatMessage({ id: "menu.events" })}</Link>
      <Link to="/tshirts">{intl.formatMessage({ id: "menu.tshirts" })}</Link>
      <Link to="/videos">{intl.formatMessage({ id: "menu.videos" })}</Link>
      <Link to="/books">{intl.formatMessage({ id: "menu.books" })}</Link>
      <Link to="/wtmg">
        {intl.formatMessage({ id: "menu.whereTheMoneyGoes" })}
      </Link>
    </nav>
  );
};

export default Nav;
