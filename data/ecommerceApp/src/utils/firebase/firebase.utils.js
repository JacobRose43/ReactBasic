import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBHcCByht6HwfA3ucOwtOsnKhwxY4A6Kuo',
	authDomain: 'crwn-clothing-db-54770.firebaseapp.com',
	projectId: 'crwn-clothing-db-54770',
	storageBucket: 'crwn-clothing-db-54770.appspot.com',
	messagingSenderId: '910313847580',
	appId: '1:910313847580:web:3e712b6614376d023718d9',
};

const firsebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, 'users', userAuth.uid);
	//!!!!!     doc takes 3 args, 1 = args, 2 = collections, 3 = identifre

	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot);
	console.log(userSnapshot.exists());

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (e) {
			console.log(`error creating the user ${e.message}`);
		}
	}

	return userDocRef;
};
