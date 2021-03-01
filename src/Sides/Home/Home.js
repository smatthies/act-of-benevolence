import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();
  return (
    <div className="home">
      <Link className="link stories" to="/stories">
        <div>{intl.formatMessage({ id: "menu.stories" })}</div>
      </Link>
      <Link className="link tshirts" to="/tshirts">
        <div>{intl.formatMessage({ id: "menu.toWear" })}</div>
      </Link>
    </div>
  );
};

export default Home;
