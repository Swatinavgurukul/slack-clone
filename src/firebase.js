// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDqkyD29Y03L7EU_k6WDCdlFaVuUoFLyMo",
    authDomain: "swati-slack.firebaseapp.com",
    projectId: "swati-slack",
    storageBucket: "swati-slack.appspot.com",
    messagingSenderId: "39006774432",
    appId: "1:39006774432:web:a86f1b44c156d3971f95c5",
    measurementId: "G-WPK9LENYL1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;