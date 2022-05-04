//REACT
import { useState } from 'react';

// FIREBASE
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

// COMPONENTS
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// STYLE
import './sign-in-form.style.scss';

const defaultFormFields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormFileds = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		await createUserDocumentFromAuth(user);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const resposne = await signInAuthUserWithEmailAndPassword(email, password);
			resetFormFileds();
			alert('logged in!');
		} catch (e) {
			switch (e.code) {
				case 'auth/wrong-password':
					alert('incorrect password for email');
					break;
				case 'auth/user-not-found':
					alert('no user associated with this email');
					break;
				default:
					console.log(e);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign In with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					inputOptions={{
						required: true,
						type: 'email',
						onChange: handleChange,
						name: 'email',
						value: email,
					}}
				/>

				<FormInput
					label='Password'
					inputOptions={{
						required: true,
						type: 'password',
						onChange: handleChange,
						name: 'password',
						value: password,
					}}
				/>

				<div className='buttons-container'>
					<Button type='submit' buttonType=''>
						Sign In
					</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
