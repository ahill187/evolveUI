import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyBtv14C0JgsL4SjKyZzVRP_-9IOmWN8ZoQ",
      authDomain: "evolve-274121.firebaseapp.com",
      databaseURL: "https://evolve-274121.firebaseio.com",
      projectId: "evolve-274121",
      storageBucket: "evolve-274121.appspot.com",
      messagingSenderId: "529785128358",
      appId: "1:529785128358:web:dd749a055b72a9a0a5bb67",
      measurementId: "G-3BTERV82TL"
});

const db = firebaseApp.firestore();

export { db };
