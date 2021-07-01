import { useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles';
import Tip from '../Tip/Tip';
import Logo from '../../img/logo.png';
import Papel from '../../img/papel.svg';
import Reciclaje from '../../img/reciclaje.svg';
import Consumismo from '../../img/consumismo.svg';
import ButtonBase from '@material-ui/core/ButtonBase';

import Parallax from 'react-springy-parallax';

export default function Home() {
	const ref = useRef('parallax');
	const _styles = useStyles();

	const [tips, setTips] = useState(false);

	const navigateTo = (page) => {
		ref.current.scrollTo(page);
		setTips(!tips);
	};
	return (
		<Parallax
			pages={2}
			scrolling={false}
			className={_styles.container}
			ref={ref}
		>
			<Parallax.Layer
				offset={0.5}
				speed={0.5}
				className={_styles.app_container}
			>
				<div className={_styles.logo_container}>
					<img src={Logo} alt='' />
					<Typography
						className={_styles.app_name}
						co1mponent='h5'
						variant='h5'
					>
						SERESO
					</Typography>
					<Typography
						className={_styles.app_description}
						co1mponent='h5'
						variant='h5'
					>
						¡Prueba a hacer una búsqueda de un residuo!
					</Typography>
					<div className='input-group mb-3'>
						<input type='text' className='form-control' />
						<div className='input-group-append'>
							<button className='btn btn-success'>
								<i className='fas fa-search'></i>
							</button>
						</div>
					</div>
					{tips ? (
						<div style={{ marginTop: '100px' }}>
							<Typography
								className={_styles.app_description}
								co1mponent='h5'
								variant='h5'
							>
								O realiza una búsqueda de un residuo
							</Typography>
							<ButtonBase
								onClick={() => navigateTo(0)}
								style={{ fontSize: '24px' }}
							>
								<i className='fas fa-arrow-up fa-2x'></i>
							</ButtonBase>
						</div>
					) : (
						<div style={{ marginTop: '100px' }}>
							<Typography
								className={_styles.app_description}
								co1mponent='h5'
								variant='h5'
							>
								O mira los tips del día
							</Typography>
							<ButtonBase
								onClick={() => navigateTo(1)}
								style={{ fontSize: '24px' }}
							>
								<i className='fas fa-arrow-down fa-2x'></i>
							</ButtonBase>
						</div>
					)}

					{/* <div className={_styles.search}>
						<div className={_styles.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Búsqueda'
							classes={{
								root: _styles.inputRoot,
								input: _styles.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div> */}
				</div>
			</Parallax.Layer>
			<Parallax.Layer offset={1} speed={0.5}>
				<div className={_styles.tips}>
					<Tip
						title='El papel más limpio y entero'
						cardStyle={_styles.papel}
						details='Siempre es mejor dejar el papel entero y evitar doblarlo
					o arrugarlo antes de ponerlo en la bolsa blanca. Como
					máximo, rasga las hojas. Es fácil de entender: cuanto
					más intacto, más dinero vale, porque las fibras
					(celulosa), se mantienen, lo cual aumenta el número de
					veces que se puede reciclar. Tampoco lo debes contaminar
					con materiales que pueden ensuciarlo.'
						imgSrc={Papel}
						link='https://believe.earth/es/14-consejos-para-separar-la-basura/'
					/>
					<Tip
						title='Fabricación de papel reciclado'
						cardStyle={_styles.reciclaje}
						details='La fabricación de papel reciclado consume un 62% menos de energía y 
					un 86% menos de agua que el papel nuevo. El reciclaje de las celulosas, 
					cartones y papeles suponen una reducción del 74% de las emisiones de gases 
					contaminantes. En el caso del agua, la reducción de la contaminación 
					alcanzaría hasta un 35%.'
						imgSrc={Reciclaje}
						link='https://anobium.es/blog/ventajas-del-reciclaje-de-papel'
					/>
					<Tip
						title='No seas parte del consumismo'
						cardStyle={_styles.card}
						details='Intenta adecuar tu consumo a tus necesidades y a las del planeta: Todos necesitamos 
					consumir ciertos productos, pero podemos evitar comprar de más y elegir no 
					solo el material de los productos que compramos, sino también el material de la bolsa o 
					el paquete en el que lo llevamos. La mejor manera de no tirar plástico, es no utilizarlo, 
					además de que si compramos sólo lo que nos vamos a comer, evitaremos generar toneladas 
					de residuos orgánicos.'
						imgSrc={Consumismo}
						link='https://www.elespanol.com/como/reciclar-casa-forma-correcta/410959145_0.html'
					/>
				</div>
			</Parallax.Layer>
		</Parallax>
	);
}
