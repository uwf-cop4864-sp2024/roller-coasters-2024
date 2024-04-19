import { getDatabase, ref,  push as firebasePush } from 'firebase/database';
import { firebaseApp } from './firebase.config';

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseApp);

export const coasterStore = {
    saveCoaster: (coaster) => {
        const costerRef = ref(db, "coasters"); //a reference to the "coasters" collection

        firebasePush(costerRef, coaster); //push the coaster object to the database
    },

    getCoasters: () => {

    }
};