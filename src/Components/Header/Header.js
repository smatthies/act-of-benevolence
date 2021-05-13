import React from "react";
import { IntlContext } from "../../Components/IntlProviderWrapper/IntlProviderWrapper";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { switchLanguage } = React.useContext(IntlContext);
  return (
    <header className="header">
      <button className="language-switch" onClick={switchLanguage}>
        English * اَلْعَرَبِيَّةُ
      </button>
      <Link to="/">
        <img alt="" src={logo} className="logo" />
      </Link>
      <p>Act of Benevolence</p>
    </header>
  );
};

export default Header;
