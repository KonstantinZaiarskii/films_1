import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import logo from "assets/img/Logo.svg";

import { routeMain as routeMainPage } from "pages/MainPage";
import { routeMain as routeFilmsListPage } from "pages/FilmsListPage";
import { routeMain as routeContacts } from "pages/Contacts";
import { routeMain as routeSearchPage } from "pages/Search";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";
import Fingerprint from "@mui/icons-material/Fingerprint";

import useStyles from "MaterialStyles/styles";

const Header = () => {
	const [active, setActive] = useState(false);

	const classes = useStyles();

	return (
		<Box>
			<AppBar position='fixed' className={classes.header}>
				<Container maxWidth='lg'>
					<Toolbar>
						<Typography
							href={routeMainPage()}
							variant='h6'
							component='a'
							sx={{ flexGrow: 1, color: "#fff" }}>
							<img src={logo} alt='photoKot' />
						</Typography>
						<nav className={classes.nav}>
							<NavLink
								exact
								to='/'
								to={routeMainPage()}
								style={isActive => ({
									color: isActive ? "#E59C9C" : "#fff",
									fontWeight: !isActive ? 600 : 500,
								})}>
								Главная
							</NavLink>
							<NavLink
								to={routeFilmsListPage()}
								style={isActive => ({
									color: isActive ? "#E59C9C" : "#fff",
									fontWeight: isActive ? 600 : 500,
								})}>
								Фильмы по категории
							</NavLink>
							<NavLink
								to={routeContacts()}
								style={isActive => ({
									color: isActive ? "#E59C9C" : "#fff",
									fontWeight: isActive ? 600 : 500,
								})}>
								О нас
							</NavLink>
							<NavLink
								to={routeSearchPage()}
								style={isActive => ({
									color: isActive ? "#E59C9C" : "#fff",
									fontWeight: isActive ? 600 : 500,
								})}>
								Поиск
							</NavLink>
						</nav>
						<IconButton
							className={classes.burger}
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={() => setActive(!active)}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
					{active && (
						<div className={classes.modal}>
							<nav className={classes.navModal}>
								<NavLink
									exact
									to='/'
									to={routeMainPage()}
									style={isActive => ({
										color: isActive ? "#E59C9C" : "#123abc",
									})}>
									Главная
								</NavLink>
								<NavLink
									to={routeFilmsListPage()}
									style={isActive => ({
										color: isActive ? "#E59C9C" : "#123abc",
									})}>
									Фильмы по категории
								</NavLink>
								<NavLink
									to={routeContacts()}
									style={isActive => ({
										color: isActive ? "#E59C9C" : "#123abc",
									})}>
									О нас
								</NavLink>
								<NavLink
									to={routeSearchPage()}
									style={isActive => ({
										color: isActive ? "#E59C9C" : "#123abc",
									})}>
									Поиск
								</NavLink>
								<IconButton aria-label='fingerprint' color='success'>
									<Fingerprint
										style={{ position: "relative" }}
										onClick={() => setActive(false)}></Fingerprint>
								</IconButton>
							</nav>
						</div>
					)}
				</Container>
			</AppBar>
			{active && <div onClick={() => setActive(false)} className={classes.overlay}></div>}
		</Box>
	);
};

export default Header;
