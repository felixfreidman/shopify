import React from "react";
import logo from "../../images/static/logo.png";
import loginImage from "../../images/content/person.png";
import classes from "../../index.module.scss";

export const Header = () => {
  return (
    <header className={classes.Header}>
      <img src={logo} alt="Logo" className={classes.Header__logo} />
      <img src={loginImage} alt="Login" className={classes.Header__login} />
    </header>
  );
};
