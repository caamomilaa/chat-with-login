import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const SignIn = ({ navigate }) => {
	return (
		<>
			<h1>Sign In</h1>
			<form onSubmit={event => loginUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' type='text' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input name='password' type='text' />
				</div>
				<input type='submit' value='sigin' />
			</form>
		</>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();

	const formData = event.target;
	const email = formData.email.value;
	const password = formData.password.value;

	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/chat');
	} catch (error) {
		console.log(error);
	}
};
export default SignIn;
