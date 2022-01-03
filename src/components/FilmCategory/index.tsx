import React from "react";

import FilmsItemCategory from "./components/FilmsItemCategory";
import useStyles from "MaterialStyles/styles";

import { IFilmsDetail } from "types/IFilmsDetail";

import clsx from "clsx";

interface IFilmsListParams {
	list: IFilmsDetail[];
}

const FilmsCategory: React.FC<IFilmsListParams> = ({ list}) => {
	const classes = useStyles();
	return (
		<div className={clsx(classes.card, "newClass")}>
			{list.map((films: IFilmsDetail) => (
				<FilmsItemCategory key={films.id} item={films} />
			))}
		</div>
	);
};
export default FilmsCategory;
