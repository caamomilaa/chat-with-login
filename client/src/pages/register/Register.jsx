import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const Register = () => {
	return (
		<>
			<h1>Register</h1>
			<form onSubmit={event => registerUser(event)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' type='text' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input name='password' type='text' />
				</div>
				<input type='submit' value='register' />
			</form>
		</>
	);
};

const registerUser = async event => {
	event.preventDefault();
	const formData = event.target;
	const email = formData.email.value;
	const password = formData.password.value;

	try {
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
	}
};

export default Register;
