import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

const Home = () => {
  const intl = useIntl();
  return (
    <div className="home">
      <Link className="link stories" to="/partners">
        <div>{intl.formatMessage({ id: "menu.partners" })}</div>
      </Link>
      <Link className="link tshirts" to="/toWear">
        <div>{intl.formatMessage({ id: "menu.toWear" })}</div>
      </Link>
    </div>
  );
};

export default Home;
