import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBb3Jtg7vIA3i8kuyHhjcJaCIyk8AT1CTE",
    authDomain: "crown-db-951a8.firebaseapp.com",
    databaseURL: "https://crown-db-951a8.firebaseio.com",
    projectId: "crown-db-951a8",
    storageBucket: "crown-db-951a8.appspot.com",
    messagingSenderId: "627316188531",
    appId: "1:627316188531:web:9612b1e9992c692a871106",
    measurementId: "G-BB28P26L0S"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error catching user', error.message);
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