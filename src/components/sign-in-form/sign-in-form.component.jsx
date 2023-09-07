import { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	SignInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils.js';

import { SignUpContainer, ButtonsContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const signInWithGoogle = async () => {
		signInWithGooglePopup();
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
		<SignUpContainer>
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
				<ButtonsContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</ButtonsContainer>
			</form>
		</SignUpContainer>
	);
};

export default SignInForm;
