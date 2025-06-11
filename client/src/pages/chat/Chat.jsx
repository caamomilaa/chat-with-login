import { signOut } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const Chat = ({ navigate }) => {
	return (
		<>
			<h1>chat chulo y bonito</h1>
			<button onClick={() => handleSignOut(navigate)}>Cerrar sesión</button>
		</>
	);
};

const handleSignOut = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Chat;
