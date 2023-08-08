import { useState, useContext } from 'react';
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import { UserContext } from '../../contexts/user.context.jsx';

import {
	createAuthUserWithEmailAndPassword,
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
	SignInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js';

import './sign-in-form.styles.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);
	//console.log(formFields);

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await SignInUserWithEmailAndPassword(email, password);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/user-not-found':
					alert('Incorrect user name.');
					break; /* Don't check the rest */
				case 'auth/wrong-password':
					alert('Incorrect password given for this user.');
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>I already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={'google'}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
