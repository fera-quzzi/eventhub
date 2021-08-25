import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAb2GB7cZxHnRtbUF01SNxCRsW1Qmk-KEc",
    authDomain: "event-hub-4e3df.firebaseapp.com",
    projectId: "event-hub-4e3df",
    storageBucket: "event-hub-4e3df.appspot.com",
    messagingSenderId: "905024451613",
    appId: "1:905024451613:web:af0f604e32e963b766c2f4"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;