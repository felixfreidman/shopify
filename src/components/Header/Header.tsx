import React from "react";
import logo from "../../images/static/image__logo.png";
import { ReactComponent as SettingsLogo } from "../../images/icons/icon__settings.svg";
import classes from "../../index.module.scss";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import Button from "../UI/Button/Button";

interface HeaderComponent {
	title: string;
}

function Header({ title }: HeaderComponent) {
	return (
		<header className={classes.Header}>
			<img src={logo} alt="" className={classes.Header__logo} />
			<span className={classes.Header__PageName}>{title}</span>
			<ButtonLink to="/settings">
				<SettingsLogo />
			</ButtonLink>
		</header>
	);
}

export default Header;
