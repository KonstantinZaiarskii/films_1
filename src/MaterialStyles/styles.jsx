import { createStyles, makeStyles } from "@mui/styles";
import { createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
	const styleTheme = createTheme();

	return createStyles({
		container: {
			backgroundColor: "#fff",
			borderRadius: 10,
			padding: `40px 90px`,
			color: "#000",
			[styleTheme.breakpoints.down("lg")]: {
				padding: `40px 30px`,
			},
			[styleTheme.breakpoints.down("sm")]: {
				padding: 5,
			},
		},
		header: {
			backgroundColor: "#3A3A3A",
		},
		burger: {
			display: " none",
			[styleTheme.breakpoints.down("md")]: {
				display: "block",
			},
		},
		modal: {
			position: "absolute",
			top: 55,
			right: 0,
			width: 108,
			border: `#000 1px solid`,
			height: 325,
			textAlign: "center",
			backgroundColor: "#fff",
		},
		linkActive: {
			color: " rgb(36, 36, 36)",
		},
		text_title: {
			marginBottom: 50,
		},
		paragraph__title: {
			color: " #fff",
			textAlign: "center",
			fontWeight: "bold",
			fontSize: 30,
		},
		offer: {
			padding: " 120px 0 40px 0",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			width: `100%`,
			[styleTheme.breakpoints.down("sm")]: {
				padding: " 170px 0 40px 0",
			},
		},
		nav: {
			display: "flex",
			gap: 20,
			[styleTheme.breakpoints.down("md")]: {
				display: "none",
				position: "fixed",
			},
		},
		navModal: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			gap: 20,
			[styleTheme.breakpoints.up("md")]: {
				display: "none",
				gap: 10,
			},
		},
		overlay: {
			position: "fixed",
			top: 0,
			left: 0,
			width: `100%`,
			height: `100%`,
			zIndex: 50,
			background: `rgb(41 47 47 / 50%)`,
			opacity: 2.1,
		},
		title: {
			color: "#E59C9C",
			fontWeight: "bold",
			marginBottom: styleTheme.spacing(6),
			textAlign: "center",
			marginBottom: 5,
			[styleTheme.breakpoints.down("sm")]: {
				fontSize: 30,
			},
		},
		paragraph__title: {
			color: "#fff",
			[styleTheme.breakpoints.down("sm")]: {
				fontSize: 16,
			},
		},
		newsCard: {
			maxWidth: 180,
			width: "100%",
			minHeight: 380,
			color: "#000",
		},
		card: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
			gridGap: 10,
		},
		preloader: {
			margin: `0 auto`,
			textAlign: "center",
			display: "block",
		},
		filmsDetail: {
			alignItems: "center",
			backgroundColor: "#fff",
			borderRadius: 10,
			padding: `40px 90px`,
			[styleTheme.breakpoints.down("lg")]: {
				justifyContent: "center",
			},
			[styleTheme.breakpoints.down("sm")]: {
				padding: 5,
			},
		},
		filmsDetail__block: {
			display: "flex",
			justifyContent: "space-between",
			marginLeft: "auto",
			fontWeight: "bold",
			flexBasis: `30%`,
			[styleTheme.breakpoints.down("lg")]: {
				flexBasis: `100%`,
				justifyContent: "center",
			},
		},
		filmsDetail__summary: {
			marginBottom: 30,
		},
		star: {
			display: "flex",
			alignItems: "center",
			gap: 10,
		},
		description: {
			display: "flex",
			flexDirection: "column",
			gap: 14,
			marginTop: 20,
		},
		filmsCategory_card: {
			maxWidth: 310,
			width: "100%",
			minHeight: 200,
		},
		contacts__content: {
			display: "flex",
			gap: 20,
			justifyContent: "space-evenly",
			flexDirection: "column",
		},
		contacts__block: {
			[styleTheme.breakpoints.down("md")]: {
				justifyContent: "center",
				gap: 30,
			},
		},
		contacts__img: {
			maxWidth: 500,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			[styleTheme.breakpoints.down("sm")]: {
				width: `100%`,
			},
		},
		search: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			gap: 30,
		},
		footer: {
			backgroundColor: "#3A3A3A",
			color: "#fff",
			padding: `25px 0`,
			textAlign: "center",
			justifyContent: "center",
		},
		footer__grid: {
			justifyContent: "space-around",
			[styleTheme.breakpoints.down("sm")]: {
				flexDirection: "column",
			},
		},
	});
});

export default useStyles;
