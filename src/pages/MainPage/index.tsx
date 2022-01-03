import React, { useEffect } from "react";

import routeMain from "./routes";
import Title from "components/Title_block";


import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selector";

import clsx from "clsx";

import FilmsList from "components/FilmList";

import HashLoader from "react-spinners/HashLoader";
import useStyles from "MaterialStyles/styles";

const MainPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const getFilmList = useSelector(selectList);

	useEffect(() => {
		dispatch(loadFilms());
	}, [dispatch]);

	return (
		<div className={clsx(classes.preloader, "main-page")}>
			{getFilmList.length === 0 ? (
				<HashLoader color={"#36D7B7"} size={50} />
			) : (
				<>
					<Title />
					<div className={classes.container}>
						{getFilmList.length > 0 && <FilmsList list={getFilmList.slice(0, 10)} />}
					</div>
				</>
			)}
		</div>
	);
};
export { routeMain };

export default MainPage;
