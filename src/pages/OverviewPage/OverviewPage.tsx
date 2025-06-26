import React, { FC } from "react";
import classes from "../../index.module.scss";
import { SectionHeader } from "../../components/UI/SectionHeader/SectionHeader";
import Layout from "../../components/Layout/Layout";

export const OverviewPage: FC = () => {
	return (
		<Layout title="Overview">
			<section className={classes.OverviewPage}>
				<SectionHeader header="Overview" />
			</section>
		</Layout>
	);
};
