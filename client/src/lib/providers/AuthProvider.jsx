import { useEffect, useState } from 'react';
import { auth } from '../config/firebase.config';
import { AuthContext } from '../context/AuthContext';

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				console.log(user);
				setUser(user);
			} else {
				console.log('no user');
				setUser(null);
			}
		});
		return () => unsuscribe();
	}, []);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
