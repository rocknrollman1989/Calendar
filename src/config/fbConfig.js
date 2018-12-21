import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCqEAHdJmvTK1u_Deqeiu5iXVJo2AcvLsk",
    authDomain: "rocknroll-calendar.firebaseapp.com",
    databaseURL: "https://rocknroll-calendar.firebaseio.com",
    projectId: "rocknroll-calendar",
    storageBucket: "rocknroll-calendar.appspot.com",
    messagingSenderId: "232928388788"
  };

  
firebase.initializeApp(config);
firebase.firestore().settings( {timestampsInSnapshots: true} )

export default firebase