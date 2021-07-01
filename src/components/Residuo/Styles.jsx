import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		minWidth: 400,
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
		alignItems: 'center',
	},
	tipTitle: {
		fontSize: 20,
	},
}));
