import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormFileds = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFileds();
		} catch (e) {
			if (e.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log(`User creation: ${e.message}`);
			}
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div>
			<h1>Sign Up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Display Name</label>
				<input required type='text' onChange={handleChange} name='displayName' value={displayName} />

				<label htmlFor=''>Email</label>
				<input required type='email' onChange={handleChange} name='email' value={email} />

				<label htmlFor=''>Password</label>
				<input required type='password' onChange={handleChange} name='password' value={password} />

				<label htmlFor=''>Confirm Password</label>
				<input required type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />

				<input type='submit' value='Sign Up' />
			</form>
		</div>
	);
};

export default SignUpForm;
