import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTfap2LiNEL4dpqGxvDKK33gMEWDiHPc",
  authDomain: "vaishnav-9785a.firebaseapp.com",
  projectId: "vaishnav-9785a",
  storageBucket: "vaishnav-9785a.appspot.com",
  messagingSenderId: "184603831284",
  appId: "1:184603831284:web:877cfab6a3b4ba4ce267a1",
  measurementId: "G-2BMCB845FR",
  };
 export default firebase.initializeApp(firebaseConfig)