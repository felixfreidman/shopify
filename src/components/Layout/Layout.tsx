import React from "react";
import classes from "../../index.module.scss";
import Header from "../Header/Header";
interface LayoutComponent extends React.PropsWithChildren {
	title: string;
}

function Layout({ children, title }: LayoutComponent) {
	return (
		<div className={classes.Layout}>
			<Header title={title} />
			<main className={classes.MainSection}>{children}</main>
		</div>
	);
}

export default Layout;
