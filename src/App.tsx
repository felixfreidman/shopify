import React from "react";
import classes from "./index.module.scss";
import { Route, Routes } from "react-router-dom";
import { OverviewPage } from "./pages/OverviewPage/OverviewPage";

const App = () => {
	return (
		<div className={classes.App}>
			<Routes>
				<Route path="/" element={<OverviewPage />} />
			</Routes>
		</div>
	);
};

export default App;
