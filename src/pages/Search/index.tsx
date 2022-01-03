import React from "react";

import routeMain from "./routes";


import useStyles from "MaterialStyles/styles";
import { styled, alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

const SearchPage = () => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.search}>
				<Typography variant='h4'>Поиск по категории</Typography>
				<Search style={{ color: "#000", border: "1px solid #000", borderRadius: 10 }}>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase placeholder='Search…' inputProps={{ "aria-label": "search" }} />
				</Search>
				<Typography variant='body1'>Результаты поиска :</Typography>
			</div>
			<Typography style={{ color: "#ff8a8a", margin: `50px auto 0 `, width: 150 }} variant='body2'>
				Введите поисковой запрос для отображения результатов
			</Typography>
		</div>
	);
};
export { routeMain };

export default SearchPage;
