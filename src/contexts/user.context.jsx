import { createContext, useState, useEffect } from 'react';

import { onAuthStateChangeListener } from '../utils/firebase/firebase.utils';

// Value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

// The actual component is called a PROVIDER
export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unsubscribe = onAuthStateChangeListener((user) => {
			console.log(user);
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
