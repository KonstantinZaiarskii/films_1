import React from "react";

import routeMain from "./routes";
import Typography from "@mui/material/Typography";

import emma from "assets/img/img_contacts.png";
import { Grid } from "@mui/material";

import useStyles from "MaterialStyles/styles";

const Contacts = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid container className={classes.contacts__block}>
				<Grid item md={6} style={{ display: "flex" }}>
					<div className={classes.contacts__img}>
						<img src={emma} alt='emma' />
					</div>
				</Grid>
				<Grid item md={6}>
					<div className={classes.contacts__content}>
						<h2>MOVIESinfo</h2>
						<Typography variant='body1'>
							Все кинозалы оснащены широкоформатными экранами, передовой акустикой и системой Bass Shaker. Фойе
							киноплекса исполнено в стиле фантастического шаттла, где огромная стойка с кинокассами напоминает
							пункт управления космического корабля. Для удобства гостей одновременно действует не менее 5 касс
							обслуживания, чтобы минимизировать количество очередей за билетами.
						</Typography>
						<Typography variant="body1">
							В фойе, а также предшествующей аллее IMAX работают кинобары, где по доступным ценам можно
							приобрести поп-корн, снеки, закуски и напитки. Кроме того, рядом с кинокассами находятся уютные
							зоны отдыха, где гости могут скоротать время в ожидании начала сеанса. Для удобства зрителей
							дополнительная кинокасса есть и в Ресторанном дворике.
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export { routeMain };

export default Contacts;
