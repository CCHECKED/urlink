import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyBZUvz1w347e5k57VJ0h7i7I9ZsNzIden4",
  authDomain: "urlink-f052c.firebaseapp.com",
  projectId: "urlink-f052c",
  storageBucket: "urlink-f052c.appspot.com",
  messagingSenderId: "356622276580",
  appId: "1:356622276580:web:c7f1a42d8b342fd07399f1",
  measurementId: "G-BM2WE58V20",
});

const db = getFirestore(firebaseApp);

export const urlsRef = collection(db, "url");
