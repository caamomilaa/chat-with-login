import { StyledLink } from './home.styles';

const Home = () => {
	return (
		<>
			<h1>Aprende todo lo que necesitas de Node.js </h1>
			<nav>
				<StyledLink to='/signin'>Inicia sesión</StyledLink>
				<StyledLink to='/register'>Regístrate</StyledLink>
			</nav>
		</>
	);
};
export default Home;
