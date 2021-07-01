import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@material-ui/core';
import { useStyles } from './Styles';

export default function Tip(props) {
	const _styles = useStyles();
	return (
		<>
			<Card
				className={[_styles.root, props.cardStyle]}
				variant='outlined'
			>
				<CardContent className={_styles.tipCard}>
					<img
						height='150px'
						src={props.imgSrc}
						alt='papel'
						style={{ margin: '10px 0px' }}
					/>
					<Typography
						style={{ margin: '10px 0px' }}
						component='h5'
						variant='h5'
					>
						{props.title}
					</Typography>
					<Typography
						variant='body2'
						color='textSecondary'
						component='p'
						style={{ textAlign: 'left' }}
					>
						{props.details}
					</Typography>
				</CardContent>
				<CardActions style={{ justifyContent: 'flex-end' }}>
					<Button
						size='small'
						color='secondary'
						style={{ fontWeight: 'bold' }}
						target='_blank'
						href={props.link}
					>
						Aprender más
					</Button>
				</CardActions>
			</Card>
			{/* <Dialog
				onClose={handleClose}
				aria-labelledby='simple-dialog-title'
				open={open}
			>
				<DialogTitle id='simple-dialog-title'>
					Set backup account
				</DialogTitle>
			</Dialog> */}
		</>
	);
}
