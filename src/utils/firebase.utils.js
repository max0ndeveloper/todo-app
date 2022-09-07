import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCF_6StH_73mSwDFZMSePrQxIerRa1sGRI",
    authDomain: "todo-app-33504.firebaseapp.com",
    projectId: "todo-app-33504",
    storageBucket: "todo-app-33504.appspot.com",
    messagingSenderId: "818680772244",
    appId: "1:818680772244:web:d7b10a07bd0ba19432a681",
    measurementId: "G-1Q9BLQMYGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// export const createTodoDocument = async (todo, additionalInformation = {}) => {
//     if (!todo) return
//     const todoDocRef = doc(db, 'todos', todo.uid)
//     const todoSnapshot = await getDoc(todoDocRef)
//
//     if (!todoSnapshot.exists()) {
//         const value = todo
//
//         try {
//             await setDoc(todoDocRef, {
//                 value,
//                 ...additionalInformation
//             })
//         } catch (error) {
//             console.log('error', error.message)
//         }
//     }
//     return todoDocRef
// }
