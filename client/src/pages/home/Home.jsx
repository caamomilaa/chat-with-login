import { StyledLink } from './home.styles';

const Home = () => {
	return (
		<>
			<h1>Accede al mejor chat del mundo.</h1>
			<nav>
				<StyledLink to='/signin'>Inicia sesión</StyledLink>
				<StyledLink to='/register'>Regístrate</StyledLink>
			</nav>
		</>
	);
};
export default Home;
