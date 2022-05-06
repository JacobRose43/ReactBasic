import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
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

export const createUserDocumentFromAuth = async (userAuth, addtionalInformation = {}) => {
	if (!userAuth) return;

	const userDocRef = doc(db, 'users', userAuth.uid);
	//!!!!!     doc takes 3 args, 1 = args, 2 = collections, 3 = identifre
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...addtionalInformation,
			});
		} catch (e) {
			console.log(`error creating the user ${e.message}`);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
	if (!callback) return;

	return onAuthStateChanged(auth, callback); //second argument - callback everytime when state changed
};
