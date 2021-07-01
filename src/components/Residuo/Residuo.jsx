import { useStyles } from './Styles';

import { Card, CardContent, Typography } from '@material-ui/core';

import Error from '../../img/error.png';

export default function Residuo(props) {
	const _styles = useStyles();

	return (
		<div>
			{props.residuo ? (
				<Card
					className={[_styles.root, props.cardStyle]}
					variant='outlined'
				>
					<CardContent className={_styles.tipCard}>
						<Typography
							style={{ margin: '10px 0px' }}
							component='h5'
							variant='h5'
						>
							{props.nombre}
						</Typography>
						<div
							style={{
								padding: '10px',
								borderRadius: '20px',
								backgroundColor: props.backgroundColor,
							}}
						>
							<img
								width='150px'
								src={props.bolsa}
								alt='papel'
								style={{ margin: '10px 0px' }}
							/>
						</div>
						<Typography
							style={{ margin: '10px 0px' }}
							component='h5'
							variant='h5'
						>
							{props.tipo}
						</Typography>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'
							style={{ textAlign: 'left' }}
						>
							{props.description}
						</Typography>
					</CardContent>
				</Card>
			) : (
				<Card
					className={[_styles.root, props.cardStyle]}
					style={{ backgroundColor: props.backgroundColor }}
					variant='outlined'
				>
					<CardContent className={_styles.tipCard}>
						<Typography
							style={{ margin: '20px 0px', fontSize: 30 }}
							component='h5'
							variant='h5'
						>
							Residuo no encontrado
						</Typography>
						<img
							width='150px'
							src={Error}
							alt='error'
							style={{ margin: '10px 0px' }}
						/>
						<Typography
							variant='body2'
							color='textSecondary'
							component='p'
							style={{ textAlign: 'center', fontSize: 25 }}
						>
							El residuo no se encuentra en la base de datos
						</Typography>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
