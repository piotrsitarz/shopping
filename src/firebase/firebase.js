import * as firebase from 'firebase';

// const  config = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

const  config = {
  apiKey: "AIzaSyDRfTsa2zgTHUrm22rJTUDNeEi2l8XCcbs",
  authDomain: "shopping-7ee56.firebaseapp.com",
  databaseURL: "https://shopping-7ee56.firebaseio.com",
  projectId: "shopping-7ee56",
  storageBucket: "shopping-7ee56.appspot.com",
  messagingSenderId: "1090860722849"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };