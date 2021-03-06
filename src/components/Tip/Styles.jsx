import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		minWidth: 400,
		textAlign: 'center',
		height: 'max-content',
		borderRadius: 10,
	},
	pos: {
		marginBottom: 12,
	},
	tipCard: {
		minHeight: '450px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		[theme.breakpoints.down('lg')]: {
			minHeight: '350px',
		},
	},
	tipTitle: {
		fontSize: 20,
	},
	img: {
		height: '150px',
		[theme.breakpoints.down('lg')]: {
			height: '110px',
		},
	},
	title: {
		[theme.breakpoints.down('lg')]: {
			fontSize: '1.2rem',
		},
	},
	details: {
		// [theme.breakpoints.down('lg')]: {
		// 	fontSize: '0.750rem',
		// },
	},
}));
