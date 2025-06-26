import React from "react";
import classes from "../../../index.module.scss";
import { NavLink, Path } from "react-router-dom";

interface ButtonLinkComponent extends React.PropsWithChildren {
	to: string | Path;
	additionalClass?: string;
}

function ButtonLink({ children, to, additionalClass }: ButtonLinkComponent) {
	const cls: string[] = [classes.Button, ""];
	cls.push(additionalClass ?? "");
	return (
		<NavLink to={to} className={cls.join(" ")}>
			{children}
		</NavLink>
	);
}

export default ButtonLink;
