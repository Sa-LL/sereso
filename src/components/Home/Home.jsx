import { useRef, useState } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles';
import Tip from '../Tip/Tip';
import Logo from '../../img/logo.png';
import Papel from '../../img/papel.svg';
import Reciclaje from '../../img/reciclaje.svg';
import Consumismo from '../../img/consumismo.svg';
import ButtonBase from '@material-ui/core/ButtonBase';

import Green from '../../img/bolsa-verde.png';
import White from '../../img/bolsa-blanca.png';
import Black from '../../img/bolsa-negra.png';

import Residuo from '../Residuo/Residuo';

import Parallax from 'react-springy-parallax';

const descriptions = [
	'Son las sobras comestibles no ingeridas por los comensales y/o los restos que no se consideran comestibles tales como los huesos y las cáscaras de algunas frutas y verduras, actualmente la gastronomía tiene como objeto de estudio desarrollar nuevos platos con dichos restos; sin embargo lo más habitual es desecharlos o aprovecharlos para compostaje. Ejemplos: pieles de animales, semillas, hojas de frutas y verduras, huesos, restos de productos de panadería.',
	'Son aquellos producidos como consecuencia de procesos en la agricultura, horticultura y/o silvicultura, albergan una gran variedad de materiales como fracciones de cultivo que no representan la cosecha de interés, cosechas que no cumplen con el mínimo de calidad para ser comercializadas, restos herbáceos y leñosos, purines o pesticidas. Una cantidad considerable de estos residuos pueden ser empleados como combustibles y producción de energía. Ejemplos: ramas, paja, residuos de cereales, tallos, entresacas.',
	'Es todo material o sustancia sólida o semisólida de origen orgánico e inorgánico, putrescible o no, proveniente de actividades domésticas, industriales, comerciales, institucionales, de servicios, que no ofrece ninguna posibilidad de aprovechamiento, reutilización o reincorporación en un proceso productivo. Son residuos sólidos que no tienen ningún valor comercial, requieren tratamiento y disposición final y por lo tanto generan costos de disposición.',
	'Es un material sintético o semisintético, cuya característica fundamental es contar con elasticidad y flexibilidad que para un intervalo de temperaturas, este permite ser moldeado y la adaptación a diversas formas. La mayoría de los plásticos son, concretamente, materiales sintéticos y derivados del petróleo. También existen plásticos que no son derivados del petróleo, como los plásticos derivados del almidón, la celulosa y ciertas bacterias.',
	'El cartón es un material que está formado por varias capas de papel superpuestas. El papel puede estar formado de fibra virgen o también se puede fabricar usando papel reciclado. El reciclaje del cartón es importante porque permite reducir la cantidad de árboles que se tienen que talar para fabricar papel.',
	'El vidrio es un material frágil, duro, transparente y amorfo. El uso más frecuente y extendido que se le da al vidrio es a la hora de la fabricación de ventanas, puertas, botellas, entre otros productos. Una de las particularidades del vidrio es que es un material totalmente reciclable, es decir, no hay límite de la cantidad de veces que el mismo puede ser reciclado. Y lo más importante: al reciclarse no pierde ni una sola propiedad. Para un correcto reciclado, lo ideal es separar y clasificar al vidrio por su tipo.',
	'El papel que se recicla puede ser el papel molido, que son los recortes y trozos de papel sobrantes en la manufactura del papel y se recicla en la fábrica de papel, los desechos son aquellos papeles ya utilizados que el consumidor desecha, como pueden ser revistas, diarios, papel de oficina, sobres, papel continuo, papel de impresión y escritura, catálogos, folletos, listados de ordenador, periódicos, libros, etc.',
	'El reciclaje de los metales contribuye significativamente a no empeorar la situación actual de contaminación. Una gran ventaja del reciclaje del metal, es que es ilimitado el número de veces que se puede reciclar. Sin embargo presenta una desventaja, no se puede reciclar en casa; pero podemos ayudar a darle una correcta separación al momento de desechar el residuo.',
];

const residuos = [
	{
		nombre: 'pieles de animales',
		tipo: 'Restos de comida',
		descripcion: descriptions[0],
		bolsa: Green,
	},
	{
		nombre: 'semillas',
		tipo: 'Restos de comida',
		descripcion: descriptions[0],
		bolsa: Green,
	},
	{
		nombre: 'hojas de frutas',
		tipo: 'Restos de comida',
		descripcion: descriptions[0],
		bolsa: Green,
	},
	{
		nombre: 'huesos',
		tipo: 'Restos de comida',
		descripcion: descriptions[0],
		bolsa: Green,
	},
	{
		nombre: 'restos de productos de panadería',
		tipo: 'Restos de comida',
		descripcion: descriptions[0],
		bolsa: Green,
	},
	{
		nombre: 'ramas',
		tipo: 'Desechos agrícolas',
		descripcion: descriptions[1],
		bolsa: Green,
	},
	{
		nombre: 'paja',
		tipo: 'Desechos agrícolas',
		descripcion: descriptions[1],
		bolsa: Green,
	},
	{
		nombre: 'residuos de cereales',
		tipo: 'Desechos agrícolas',
		descripcion: descriptions[1],
		bolsa: Green,
	},
	{
		nombre: 'tallos',
		tipo: 'Desechos agrícolas',
		descripcion: descriptions[1],
		bolsa: Green,
	},
	{
		nombre: 'entresacas',
		tipo: 'Desechos agrícolas',
		descripcion: descriptions[1],
		bolsa: Green,
	},
	{
		nombre: 'papel higienico usado',
		tipo: 'No aprovechable',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'servilletas de papel usadas',
		tipo: 'No aprovechable',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'caja de pizza',
		tipo: 'Cartón contaminado con comida',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'tarjeta metalizada',
		tipo: 'Papel metalizado',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'empaques de frituras y dulces',
		tipo: 'Papel metalizado',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'bolsa de papel con grasa',
		tipo: 'Papel contaminado con comida',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'restos de barrido',
		tipo: 'No aprovechable',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'caja de leche o jugo',
		tipo: 'Cartón contaminado con comida',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'toallas de papel',
		tipo: 'Papel contaminado con comida',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'revista',
		tipo: 'Papel encerado',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'pañales',
		tipo: 'No aprovechable',
		descripcion: descriptions[2],
		bolsa: Black,
	},
	{
		nombre: 'botella de agua',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'envase de aceite para motores',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'bolsas de mercado',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'pitillos',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'teteros',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'biberones',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'teteros o biberones',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'tuberias',
		tipo: 'Plástico',
		descripcion: descriptions[3],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'empaque de zapatos',
		tipo: 'Cartón',
		descripcion: descriptions[4],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'empaque de dulces',
		tipo: 'Cartón',
		descripcion: descriptions[4],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'ventana rota',
		tipo: 'Vidrio',
		descripcion: descriptions[5],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'envase de gaseosa retornable',
		tipo: 'Vidrio',
		descripcion: descriptions[5],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'botella de vino',
		tipo: 'Vidrio',
		descripcion: descriptions[5],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'cuadernos viejos',
		tipo: 'Papel',
		descripcion: descriptions[6],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'periodicos',
		tipo: 'Papel',
		descripcion: descriptions[6],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'bebidas enlatadas',
		tipo: 'Metales',
		descripcion: descriptions[7],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'clavos',
		tipo: 'Metales',
		descripcion: descriptions[7],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'puntillas',
		tipo: 'Metales',
		descripcion: descriptions[7],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
	{
		nombre: 'electrodomesticos en mal estado',
		tipo: 'Metales',
		descripcion: descriptions[7],
		bolsa: White,
		backgroundColor: 'rgb(149, 106, 38)',
	},
];

export default function Home() {
	const ref = useRef('parallax');
	const _styles = useStyles();

	const [tips, setTips] = useState(false);
	const [search, setSearch] = useState('');
	const [residuo, setResiduo] = useState(false);

	const navigateTo = (page) => {
		ref.current.scrollTo(page);
		setTips(!tips);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleClickSearch = () => {
		const res = residuos.find((x) => x.nombre === search);
		setResiduo((prevState) => res);
		navigateTo(2);
	};

	return (
		<Parallax pages={1} scrolling={false}>
			<Parallax.Layer offset={0} className={_styles.container}>
				<Parallax ref={ref} pages={4} scrolling={false}>
					<Parallax.Layer
						offset={0}
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
								<input
									type='text'
									className='form-control'
									onChange={handleSearch}
									value={search}
								/>
								<div className='input-group-append'>
									<button
										onClick={handleClickSearch}
										className='btn btn-success'
									>
										<i className='fas fa-search'></i>
									</button>
								</div>
							</div>
							<div
								style={{
									marginTop: '100px',
								}}
							>
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
						</div>
					</Parallax.Layer>
					<Parallax.Layer offset={1} speed={0.5}>
						<div
							style={{ marginTop: '80px', marginBottom: '30px' }}
							className={_styles.logo_container}
						>
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
					<Parallax.Layer
						offset={2}
						speed={0.5}
						className={_styles.app_container}
					>
						{residuo ? (
							<Residuo
								nombre={residuo.nombre}
								bolsa={residuo.bolsa}
								tipo={residuo.tipo}
								description={residuo.descripcion}
								backgroundColor={residuo.backgroundColor}
								residuo
							/>
						) : (
							<Residuo residuo={false} />
						)}
						<div
							style={
								residuo
									? {
											marginTop: '10px',
											marginBottom: '30px',
									  }
									: {
											marginTop: '80px',
											marginBottom: '30px',
									  }
							}
							className={_styles.logo_container}
						>
							<Typography
								className={_styles.app_description}
								co1mponent='h5'
								variant='h5'
							>
								Volver
							</Typography>
							<ButtonBase
								onClick={() => navigateTo(0)}
								style={{ fontSize: '24px' }}
							>
								<i className='fas fa-arrow-up fa-2x'></i>
							</ButtonBase>
						</div>
					</Parallax.Layer>
					<Parallax.Layer offset={3} speed={0.5}>
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
			</Parallax.Layer>
		</Parallax>
	);
}
