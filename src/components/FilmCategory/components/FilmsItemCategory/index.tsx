import React from "react";

import Card from "@mui/material/Card";
import { NavLink } from "react-router-dom";
import { routeMain as routeFilmsDetail } from "pages/FilmsDetail";

import CardContent from "@mui/material/CardContent";
import { IFilmsDetail } from "types/IFilmsDetail";

import Typography from "@mui/material/Typography";
import useStyles from "MaterialStyles/styles";

interface IFilmsItemParams {
	item: IFilmsDetail;
}

const FilmsItemCategory: React.FC<IFilmsItemParams> = ({ item }) => {
	const classes = useStyles();
	return (
		<Card variant='outlined' className={classes.filmsCategory_card}>
			<NavLink to={routeFilmsDetail(item.id)}>
				<CardContent className='newsCard__content'>
					<div>
						<img style={{ borderRadius: 10 }} src={`${item?.image?.medium}`} alt='img' />
					</div>
					<Typography style={{ marginTop: 20, marginBottom: 20 }} variant='h5'>
						{item.name}
					</Typography>
					<div className='genres' style={{ marginTop: 20, marginBottom: 20 }}>
						<Typography variant='body2'>{item.genres.join(", ")}</Typography>
					</div>
				</CardContent>
			</NavLink>
		</Card>
	);
};

export default FilmsItemCategory;
