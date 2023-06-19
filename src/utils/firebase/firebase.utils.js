import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAec1C0w5lO53oJ3r16nm0rk9y91qD7DM0',
	authDomain: 'crown-clothing-db-36b17.firebaseapp.com',
	projectId: 'crown-clothing-db-36b17',
	storageBucket: 'crown-clothing-db-36b17.appspot.com',
	messagingSenderId: '83689552765',
	appId: '1:83689552765:web:77dec56aa14641e9172a14',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	//(getFirestore(),name of the collection, unique identifier)
	const userDocRef = doc(db, 'users', userAuth.uid);
	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}
	return userDocRef;
};
