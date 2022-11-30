import { initializeApp } from 'firebase/app'
import { getFirestore, serverTimestamp } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDyKUVNfqHC4lvotqHxZ4ykUcEFTsuv0PQ",
    authDomain: "vue-blog-system-6ee42.firebaseapp.com",
    projectId: "vue-blog-system-6ee42",
    storageBucket: "vue-blog-system-6ee42.appspot.com",
    messagingSenderId: "477115734394",
    appId: "1:477115734394:web:52639e2b02849c69535ec3"
};

// initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// setup Cloud Firestore
let firestoreDB = getFirestore(firebaseApp);

// setup Authentication
let auth = getAuth(firebaseApp);

export {
    firebaseApp,
    firestoreDB,
    serverTimestamp,
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword
};
