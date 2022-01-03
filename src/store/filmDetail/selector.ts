import { IStore } from "./types";

export const selectFilmId = (state: { filmsReducerId: IStore }): IStore['filmDetail'] => state.filmsReducerId.filmDetail;
