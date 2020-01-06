import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore()

export default firebaseApp
