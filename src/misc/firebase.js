import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCvfuwqAz-kuIBsC5WLky-ljXUl1c6i5Rw",
  authDomain: "slack-clone-9d82d.firebaseapp.com",
  databaseURL: "https://slack-clone-9d82d.firebaseio.com",
  projectId: "slack-clone-9d82d",
  storageBucket: "slack-clone-9d82d.appspot.com",
  messagingSenderId: "706255090528",
  appId: "1:706255090528:web:c10664ade7dfec6daa2405"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  export  {auth, providerGoogle};
  export default db;
