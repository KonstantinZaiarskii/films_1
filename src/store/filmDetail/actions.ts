import { Dispatch } from "redux";
import getFilmsDetail from "services/getFilmDetail";

import { IStore } from "./types";

export const setFilmsDetail = (filmDetail: IStore) => {
	return {
		type: "filmsDetail/setFilmsDetail",
		payload: filmDetail,
	};
};

export const loadFilmsId = (id: string) => async (dispatch: Dispatch) => {
	try {
		const response = await getFilmsDetail(id);
		dispatch(setFilmsDetail(response.data));
	} catch (err) {
		console.log(err, "произошла ошибка");
	}
};
