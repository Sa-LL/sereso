import Home from './components/Home/Home';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { green, brown } from '@material-ui/core/colors';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'Nunito',
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
		].join(','),
	},
	palette: {
		primary: green,
		secondary: brown,
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Home />
			</div>
		</ThemeProvider>
	);
}

export default App;
