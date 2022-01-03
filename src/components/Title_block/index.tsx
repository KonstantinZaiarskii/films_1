import React from "react";

import PageTitle from "components/PageTitle";

import Container from "@mui/material/Container";

import useStyles from "MaterialStyles/styles";

const Title = () => {
	const classes = useStyles();

	return (
		<Container maxWidth='lg'>
			<section className={classes.text_title}>
				<PageTitle title={"MOVIESinfo"} paragraph={"Самый популярный портал о фильмах"}></PageTitle>
			</section>
		</Container>
	);
};

export default Title;
