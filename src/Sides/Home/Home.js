import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <Link className="link stories" to="/stories">
      <div>stories</div>
    </Link>
    <Link className="link tshirts" to="/tshirts">
      <div>tshirts</div>
    </Link>
  </div>
);

export default Home;
