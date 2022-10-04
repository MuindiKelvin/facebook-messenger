import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

    firebase.initializeApp({ /* config */
        apiKey: "AIzaSyBtRhFw5S3fpTx5YUGzXHKSMmu3Lzk57pY",
        authDomain: "facebook-messenger-clone-48eb0.firebaseapp.com",
        projectId: "facebook-messenger-clone-48eb0",
        storageBucket: "facebook-messenger-clone-48eb0.appspot.com",
        messagingSenderId: "77078081346",
        appId: "1:77078081346:web:e478a915e549ab40e662db",
        measurementId: "G-B9LQX2L9CG"
 });
    const db = firebase.firestore();
    export default db;
