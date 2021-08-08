import  {firebase} from '@firebase/app';
import 'firebase/storage';
 import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAaSFga2RyyhP2DslnxZx7QBqKgh_v5Ruw",
  authDomain: "kashirportfolio.firebaseapp.com",
  projectId: "kashirportfolio",
  storageBucket: "kashirportfolio.appspot.com",
  messagingSenderId: "203477073265",
  appId: "1:203477073265:web:72ade311a83f8902a70ad0",
  measurementId: "G-NPB7LDW66Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,
     projectFirestore,
     timestamp
} ;