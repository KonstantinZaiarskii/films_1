import React from "react";

import logo from "assets/img/Logo.svg";
import Container from "@mui/material/Container";

import { Grid } from "@mui/material";
import clsx from "clsx";

import useStyles from "MaterialStyles/styles";

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={clsx(classes.footer, "footer")}>
			<Container maxWidth='lg'>
				<Grid container className={classes.footer__grid}>
					<Grid item md={4}>
						<a href='/'>
							<img src={logo} alt='logo' />
						</a>
					</Grid>
					<Grid item md={4}>
						<span>School © WayUp. 2021 </span>
					</Grid>
					<Grid item md={4}>
						<p>Made by</p>
						<p>Zaiarskii_K</p>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
