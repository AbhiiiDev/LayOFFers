import firebase  from "firebase";

import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCATTtMsupWxnGjiWEBfP_ApMVyNf-ye4M",
    authDomain: "layoffers-e9c1d.firebaseapp.com",
    projectId: "layoffers-e9c1d",
    storageBucket: "layoffers-e9c1d.appspot.com",
    messagingSenderId: "736688460459",
    appId: "1:736688460459:web:7d180252b8153263fa1dee"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const  provider = new firebase.auth.GoogleAuthProvider();
  const storage= firebase.storage();

  export { auth, provider , storage};
  export default db;
