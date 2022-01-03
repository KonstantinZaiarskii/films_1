import { IImage } from "./IImage";

export interface IFilmsDetail {
	id: string;
	name: string;
	image: IImage;
	medium: string;
	genres: Array<string>;
	premiered: string;
	summary: string;
	rating: {
		average: number;
	};
	getFilmsList: {
		genres: string;
		id: string;
	};
	network: {
		country: {
			name: string;
		};
	};
	show: {
		name: string;
		image: IImage;
	};
}
