import * as firebase from "firebase"

const config = {
  apiKey: "AIzaSyDYEFF_LOG85XJlxoP40pGMq4eKB4o-MmE",
  authDomain: "add-golf-score.firebaseapp.com",
  databaseURL: "https://add-golf-score.firebaseio.com",
  projectId: "add-golf-score",
  storageBucket: "add-golf-score.appspot.com",
  messagingSenderId: "1034549522633"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();