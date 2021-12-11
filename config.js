import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBrO7cveOFutBZppvK14H3KkPiBz6npQ04",
  authDomain: "petapp2-d0928.firebaseapp.com",
  projectId: "petapp2-d0928",
  storageBucket: "petapp2-d0928.appspot.com",
  messagingSenderId: "529027000906",
  appId: "1:529027000906:web:65c6acd06f9f197629d4b3"
};
firebase.initializeApp(firebaseConfig)

export default firebase.firestore()