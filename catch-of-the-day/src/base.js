import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "MI_API_KEY",
  authDomain: "catch-of-the-day-wes-bos-85446.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos-85446.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
