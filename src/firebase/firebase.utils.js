import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBRWh7H8ZGhl7JiKFL6zKHnrnXSx8DyzqI",
    authDomain: "oebalus-b763a.firebaseapp.com",
    databaseURL: "https://oebalus-b763a.firebaseio.com",
    projectId: "oebalus-b763a",
    storageBucket: "oebalus-b763a.appspot.com",
    messagingSenderId: "778518040267",
    appId: "1:778518040267:web:d52b454bdecddca59ad54e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
