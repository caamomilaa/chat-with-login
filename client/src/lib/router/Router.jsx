import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Register from '../../pages/register/Register';
import SignIn from '../../pages/sign-in/SignIn';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Register />} />
			<Route path='/signin' element={<SignIn />} />
		</Routes>
	);
};
export default Router;
