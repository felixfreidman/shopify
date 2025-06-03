import React, { FC, PropsWithChildren } from "react";

interface SectionHeaderProps {
	header: string;
}

export const SectionHeader: FC<PropsWithChildren<SectionHeaderProps>> = ({
	header,
}) => {
	return <span>{header}</span>;
};
