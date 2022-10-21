import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export const firebaseConfig = {

    apiKey: "AIzaSyApy7EHAdLEw98Tb5lkzzupFgO90mr_U9s",
    authDomain: "navi-2b5bf.firebaseapp.com",
    databaseURL: "https://navi-2b5bf-default-rtdb.firebaseio.com",
    projectId: "navi-2b5bf",
    storageBucket: "navi-2b5bf.appspot.com",
    messagingSenderId: "591616732286",
    appId: "1:591616732286:web:151779f45da0a9a8087c2f",
    measurementId: "G-BQ8Z1Y8JM6"

};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

