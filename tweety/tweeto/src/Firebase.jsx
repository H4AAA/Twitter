import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCQfnXlPjhnEZBpG_RTO7AHnfnrWshmLn4",
    authDomain: "tweety-46ab6.firebaseapp.com",
    databaseURL: "https://tweety-46ab6-default-rtdb.firebaseio.com",
    projectId: "tweety-46ab6",
    storageBucket: "tweety-46ab6.appspot.com",
    messagingSenderId: "742235175490",
    appId: "1:742235175490:web:81a47e8a2c24c08b09cbdb"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const FireDb= firebaseApp.firestore();
export default FireDb;