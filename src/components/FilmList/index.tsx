import React from "react";

import FilmsItem from "./components/FilmsItem";
import useStyles from "MaterialStyles/styles";

import { IFilmsDetail } from "types/IFilmsDetail";

import clsx from "clsx";

interface IFilmsListParams {
	list: IFilmsDetail[];
}

const FilmsList: React.FC<IFilmsListParams> = ({ list}) => {
	const classes = useStyles();
	return (
		<div className={clsx(classes.card, "newClass")}>
			{list.map((films: IFilmsDetail) => (
				<FilmsItem key={films.id} item={films} />
			))}
		</div>
	);
};
export default FilmsList;
