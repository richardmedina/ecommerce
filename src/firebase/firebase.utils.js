import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyArqPQMelkcmETH-GaZF6vg3932DiARQsQ",
    authDomain: "ecommerce-adf6e.firebaseapp.com",
    databaseURL: "https://ecommerce-adf6e.firebaseio.com",
    projectId: "ecommerce-adf6e",
    storageBucket: "ecommerce-adf6e.appspot.com",
    messagingSenderId: "1033716118005",
    appId: "1:1033716118005:web:28c2f722aebfba2de370bc",
    measurementId: "G-RFRX0R7LQG"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
