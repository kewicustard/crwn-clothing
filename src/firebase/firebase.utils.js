import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBblzLGQEom7kaqQsJ8b0J9imq96qo48AE",
    authDomain: "crwn-db-42e67.firebaseapp.com",
    databaseURL: "https://crwn-db-42e67.firebaseio.com",
    projectId: "crwn-db-42e67",
    storageBucket: "crwn-db-42e67.appspot.com",
    messagingSenderId: "826250276526",
    appId: "1:826250276526:web:5384b9e8bce04aa6af473f",
    measurementId: "G-EL7YBLDF28"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;