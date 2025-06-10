import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './lib/router/Router';
import AuthProvider from './lib/providers/AuthProvider';

const App = () => {
	return (
		<>
			<AuthProvider>
				<BrowserRouter>
					<GlobalStyles />
					<Router />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
};

export default App;
