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
    console.log("Getting info from userAuth:", userAuth)
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    console.log("snapshot: ", snapShot)

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

    console.log("RETURNING: ", userRef)
    
    return userRef

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(`${collectionKey}`, objectsToAdd)
    // console.log("addCollectionAndDocumentRef: ", collectionRef)

    const batch = firestore.batch()

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        // console.log(newDocRef)
        batch.set(newDocRef, obj)
    })

    console.log("Saving collections")

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const  { title, items } = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            title,
            id: doc.id,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc
    }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account'})

//export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const getCurrentUser = () => {
    return new Promise ((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

export default firebase
