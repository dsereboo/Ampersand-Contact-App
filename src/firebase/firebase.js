import * as firebase from "firebase"
import "firebase/auth"
import "firebase/firebase-firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAWkpU_a7E38BiFypWLXgLThLrcgT26w3g",
  authDomain: "codetrainproject-4c734.firebaseapp.com",
  projectId: "codetrainproject-4c734",
  storageBucket: "codetrainproject-4c734.appspot.com",
  messagingSenderId: "440672026163",
  appId: "1:440672026163:web:c925a6ac4d862b73faed46"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
// firebase.initializeApp(firebaseConfig)

export default firebase