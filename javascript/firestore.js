
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// name of the the Firebase collection to be used
const FB_COLLECTION = "events";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
let database = firebase.firestore();

/*
    Get all messages
*/
async function getMessagesAsync() {
    // Declare empty array
    let messages = [];
  
    // await calls must be made in try-catch blocks
    try {
      // Get a snapshot of the products collection
      let snapshot = await database.collection(FB_COLLECTION).get();
  
      // use map() to retrieve product document objects from the snapshot - storing each in the array
      // map returns each document from the firestore snapshot
      messages = snapshot.docs.map(doc => {
        return doc;
      });
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the messages array
    return messages;
  }