import React, { FC } from "react";
import classes from "../../index.module.scss";
import { SectionHeader } from "../../components/UI/SectionHeader/SectionHeader";

export const OverviewPage: FC = () => {
	return (
		<section className={classes.OverviewPage}>
			<SectionHeader header="Overview" />
		</section>
	);
};
