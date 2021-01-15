// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBgZTlWwtYcjg4_z3PjpSXo05t8mUl8AjQ",
    authDomain: "facebook-clone-597ec.firebaseapp.com",
    projectId: "facebook-clone-597ec",
    storageBucket: "facebook-clone-597ec.appspot.com",
    messagingSenderId: "429511946996",
    appId: "1:429511946996:web:bdc4b69e61e747d98de4a1",
    measurementId: "G-GWWE5X6Y90"
  };

  const firebaseApp = firebase.initiliazeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;