import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBqlkK3zOAbkrZ3rHFL4W8xy06fP7IZ48I",
    authDomain: "react-native-firebase-de-28484.firebaseapp.com",
    projectId: "react-native-firebase-de-28484",
    storageBucket: "react-native-firebase-de-28484.appspot.com",
    messagingSenderId: "391320741110",
    appId: "1:391320741110:web:6450e74db576f9c49138d7"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)



