import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeGwX5hZJPhN92OOqJhomQwlFLI7tZImk",
    authDomain: "vue-cli-alex.firebaseapp.com",
    projectId: "vue-cli-alex",
    storageBucket: "vue-cli-alex.appspot.com",
    messagingSenderId: "760595985819",
    appId: "1:760595985819:web:5afebe7c21c04b0f419d3e"
  };

  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore()
  const auth = firebase.auth()

  const profileCollection = db.collection('profile')
  const petsCollection = db.collection('pets')

  export {
      db, auth, profileCollection, petsCollection
  }
