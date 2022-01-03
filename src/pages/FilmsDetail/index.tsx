import React, { useEffect } from "react";

import routeMain from "./routes";

import { ID } from "types/ID";

import { useParams } from "react-router-dom";
import DateView from "components/DateView";

//redux
import { useDispatch, useSelector } from "react-redux";
import { loadFilmsId } from "store/filmDetail/actions";
import { selectFilmId } from "store/filmDetail/selector";

import { Grid } from "@mui/material";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import Typography from "@mui/material/Typography";
import useStyles from "MaterialStyles/styles";

import star from "../../assets/img/star.png";

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;

const FilmDetail = () => {
	const classes = useStyles();

	const { id } = useParams<ID>();
	const dispatch = useDispatch();
	const filmsDetail = useSelector(selectFilmId);

	useEffect(() => {
		dispatch(loadFilmsId(id));
	}, []);

	return (
		<div className={"filmDetail"}>
			{filmsDetail === null ? (
				<HashLoader css={override} color={"#36D7B7"} size={100} />
			) : (
				<Grid container className={classes.filmsDetail}>
					<Grid item lg={4}  className={classes.filmsDetail__block}>
						<img
							style={{ width: 230 }}
							className={classes.filmsDetail__summary}
							src={filmsDetail.image.medium}
							alt='film'
						/>
					</Grid>
					<Grid item lg={8}>
						<div className={classes.filmsDetail__block}>
							<div className='name'>
								<Typography style={{ color: "#E59C9C" }} variant='h4' className='filmDetail__title'>
									{filmsDetail.name}
								</Typography>
							</div>
							<div className={classes.star}>
								<img src={star} alt='star' />
								{filmsDetail.rating.average}\10
							</div>
						</div>
						<div className={classes.description}>
							<div style={{ textAlign: "start" }} className='year'>
								<DateView value={filmsDetail.premiered} />
							</div>
							<div style={{ textAlign: "start" }} className='year'>
								<span style={{ fontWeight: "bold" }}>Страна :</span> {filmsDetail.network.country.name}
							</div>
							<div style={{ textAlign: "start" }} className='year'>
								<span style={{ fontWeight: "bold" }}>Жанр :</span> {filmsDetail.genres.join(', ')}
							</div>
							<div style={{ textAlign: "start" }} className='year'>
								<span style={{ fontWeight: "bold" }}>Описание :</span> {filmsDetail.summary}
							</div>
						</div>
					</Grid>
				</Grid>
			)}
		</div>
	);
};
export { routeMain };

export default FilmDetail;
