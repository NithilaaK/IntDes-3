import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyA6hdUmV7OybZUEedCRonZxAqZ-4Z5_eB4",
    authDomain: "intdes-ddfed.firebaseapp.com",
    projectId: "intdes-ddfed",
    storageBucket: "intdes-ddfed.appspot.com",
    messagingSenderId: "1071397178643",
    appId: "1:1071397178643:web:c8e425ddda9ae938329ee6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();