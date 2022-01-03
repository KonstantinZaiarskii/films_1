import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import FilmsListPage, { routeMain as routeFilmsListPage } from "pages/FilmsListPage";
import FilmsDetail, { routeMain as routeFilmsDetail } from "pages/FilmsDetail";
import Contacts, { routeMain as routeContacts } from "pages/Contacts";
import Search, { routeMain as routeSearchPage } from "pages/Search";

import Container from "@mui/material/Container";

import useStyles from "MaterialStyles/styles";

const Offer = () => {
	const classes = useStyles();
	const NoMatch = () => {
		return (
			<div>
				<h3>No match for</h3>
			</div>
		);
	};

	return (
		<section className={classes.offer}>
			<Container maxWidth='lg'>
				<Switch>
					<Route exact path={routeMainPage()} component={MainPage} />
					<Route exact path={routeFilmsListPage()} component={FilmsListPage} />
					<Route exact path={routeFilmsDetail()} component={FilmsDetail} />
					<Route exact path={routeContacts()} component={Contacts} />
					<Route exact path={routeSearchPage()} component={Search} />
					<Route exact path='*' component={MainPage} />
					<Redirect to='/' />
				</Switch>
			</Container>
		</section>
	);
};

export default Offer;
