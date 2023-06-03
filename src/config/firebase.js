import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDzMFkg_UtLTvmL-H_NFp1YjN5AOq_wqLM",
  authDomain: "unidad1-bc666.firebaseapp.com",
  projectId: "unidad1-bc666",
  storageBucket: "unidad1-bc666.appspot.com",
  messagingSenderId: "478436832493",
  appId: "1:478436832493:web:8dd044bebc5e6ae06308e4"
};


firebase.initializeApp(firebaseConfig);

export default firebase

