import React, { useEffect } from "react";

import routeMain from "./routes";


import { useDispatch, useSelector } from "react-redux";
import { loadFilms } from "store/films/actions";
import { selectList } from "store/films/selector";


import PreloaderProgress from "components/preloader";
import FilmsCategory from "components/FilmCategory";

import useStyles from "MaterialStyles/styles";

import clsx from "clsx";

const FilmsListPage = () => {
	const classes = useStyles();
	const [progress, setProgress] = React.useState(10);

	const dispatch = useDispatch();
	const getFilmsList = useSelector(selectList);
	for (let i = 0; i < getFilmsList.length; i++) {
	let arrFilms = getFilmsList[i];
	console.log(arrFilms)
	}
	console.log(getFilmsList)

	useEffect(() => {
		dispatch(loadFilms());
	}, [dispatch]);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
		}, 800);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={clsx(classes.preloader, "Films")}>
			{getFilmsList.length === 0 ? (
				<PreloaderProgress value={progress} />
			) : (
				<div className={classes.container}>
					<p>Выбранные жанры:{getFilmsList[0].genres.join(", ")}</p>
					{getFilmsList.length > 0 && <FilmsCategory list={getFilmsList} />}
				</div>
			)}
		</div>
	);
};
export { routeMain };

export default FilmsListPage;
