import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
	const logGoogleUser = async () => {
		// ASYNC functions to communicate with DBs
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<h1> SIGN IN PAGE</h1>
			<button onClick={logGoogleUser}>Sign in with Google</button>
			<SignUpForm />
		</div>
	);
};

export default SignIn;
