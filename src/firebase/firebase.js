import * as firebase from "firebase"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAWkpU_a7E38BiFypWLXgLThLrcgT26w3g",
    authDomain: "codetrainproject-4c734.firebaseapp.com",
    projectId: "codetrainproject-4c734",
    storageBucket: "codetrainproject-4c734.appspot.com",
    messagingSenderId: "440672026163",
    appId: "1:440672026163:web:f3d97de8925053e8faed46"
  }

firebase.initializeApp(firebaseConfig)

export default firebase