import { Dispatch } from "redux";
import getFilms from "services/getFilm";

import { IStore } from "./types";

export const setFilmsAction = (list: IStore["list"]) => {
	return {
		type: "films/setFilms",
		payload: list,
	};
};

export const loadFilms = () => async (dispatch: Dispatch) => {
	try {
		const response = await getFilms();

		dispatch(setFilmsAction(response.data));
	} catch (err) {
		console.log(err, "произошла ошибка");
	}
};
