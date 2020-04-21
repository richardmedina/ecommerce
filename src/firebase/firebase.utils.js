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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            console.log(`User ${displayName} Created as ${email}`)
        } catch (error) {
            console.log ('Error creating user', error.message)
        }
    }
    else {
        console.log("User already exists", snapShot)
    }
    
    return userRef

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
