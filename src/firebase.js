import firebase from "firebase";

const {
  REACT_APP_API_KEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_DATABASE_URL,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  databaseURL: REACT_APP_DATABASE_URL,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

export const firestoreService = {
  getPools: () => firebase.firestore().collection("pools"),
  getPool: username =>
    username
      ? firestoreService
          .getPools()
          .doc(username)
          .get()
          .then(doc => {
            if (doc.exists) {
              return doc.data();
            } else {
              console.log("No such document!");
            }
          })
          .catch(error =>
            console.log(
              "Oooops! Something failed when retrieving the data from the Firestore",
              error
            )
          )
      : null
};

export default firebase;
