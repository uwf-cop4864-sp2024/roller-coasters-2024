import {
  getDatabase,
  ref,
  onValue,
  push as firebasePush,
} from "firebase/database";
import { firebaseApp } from "./firebase.config";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);

export const coasterStore = {
  saveCoaster: (coaster) => {
    const costerRef = ref(db, "coasters"); //a reference to the "coasters" collection

    firebasePush(costerRef, coaster); //push the coaster object to the database
  },

  onCoastersChange: (setCoasters) => {
    // Get a reference to the coaster
    const coastersRef = ref(db, "coasters");

    // When the value changes
    onValue(coastersRef, (snapshot) => {
      // Get the current contents of the coaster list
      const coasters = snapshot.val();
      const coasterList = [];

      // Build out an array of coaster data, including the id
      for (let id in coasters) {
        coasterList.push({ id, ...coasters[id] });
      }

      // Call the callback function with the coaster list
      setCoasters(coasterList);
    });
  },
};
