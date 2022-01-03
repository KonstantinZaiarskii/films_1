import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const getFilmList = (): Promise<AxiosResponse> => {
	const options: AxiosRequestConfig = {
		method: "GET",
		url: "https://api.tvmaze.com/shows?q=animals",
	};

	return axios.request(options);
};

export default getFilmList;
