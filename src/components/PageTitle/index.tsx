import React from "react";

import Typography from "@mui/material/Typography";
import useStyles from "MaterialStyles/styles";

interface IPageTitleParams {
	title: string;
	paragraph: string;
}

const PageTitle: React.FC<IPageTitleParams> = ({ title , paragraph }) => {
	const classes = useStyles();
	return (
		<>
			<Typography variant='h2' className={classes.title}>
				{title}
			</Typography>
			<Typography variant='h4' className={classes.paragraph__title}>
				{paragraph}
			</Typography>
		</>
	);
};

export default PageTitle;
