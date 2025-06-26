import React from "react";
import classes from "../../../index.module.scss";

interface ButtonComponent extends React.PropsWithChildren {
	additionalClass?: string;
}

function Button({ children, additionalClass }: ButtonComponent) {
	const cls = [classes.Button, ""];
	cls.push(additionalClass ?? "");
	return <div className={cls.join(" ")}>{children}</div>;
}

export default Button;
