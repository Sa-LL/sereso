import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	root: {
		maxWidth: 370,
		minWidth: 370,
		textAlign: 'center',
		height: 'max-content',
		borderRadius: 10,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	tipCard: {
		minHeight: '450px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	tipTitle: {
		fontSize: 20,
	},
});
