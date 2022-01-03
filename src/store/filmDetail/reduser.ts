import { AnyAction } from "redux";
import { IStore } from "./types";


const initialState = {
	filmDetail: null,
};


const filmsReducerId = (state: IStore = initialState, action: AnyAction) => {
	switch (action.type) {
		case "filmsDetail/setFilmsDetail":
			return { ...state, filmDetail: {...action.payload}};
		default:
			return state;
	}
};

export default filmsReducerId;
