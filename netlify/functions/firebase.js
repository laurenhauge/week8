const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBrOHwskRvkXhf2Qeu_wpyo2c3O8KejeeY",
  authDomain: "kiei-451-7ad34.firebaseapp.com",
  projectId: "kiei-451-7ad34",
  storageBucket: "kiei-451-7ad34.appspot.com",
  messagingSenderId: "92694867738",
   appId: "1:92694867738:web:b60db147be1becd9aa06a3"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase