//import the function from the realtime database module
import { initializeApp } from "firebase/app";
import { getDatabase, ref,  push as firebasePush } from 'firebase/database';
import { firebaseConfig } from './firebase.config';
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export const coasterStore = {
    saveCoaster: (coaster) => {
        const costerRef = ref(db, "coasters"); //a reference to the "coasters" collection

        firebasePush(costerRef, coaster); //push the coaster object to the database
    },

    getCoasters: () => {

    }
};