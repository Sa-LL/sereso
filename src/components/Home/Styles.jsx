import { fade, makeStyles } from '@material-ui/core/styles';
import Img from '../../img/background.png';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	container: {
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundImage: `url(${Img})`,
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},

	app_container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo_container: {
		textAlign: 'center',
		color: 'white',
	},
	app_name: {
		fontSize: 50,
		marginTop: 0,
		marginBottom: 15,
	},
	app_description: {
		fontSize: 20,
		margin: '20px 0px',
	},
	tips: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-around',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			width: '70%',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('500px')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
	papel: {
		backgroundColor: 'antiquewhite',
	},
	reciclaje: {
		backgroundColor: 'honeydew',
	},
}));
