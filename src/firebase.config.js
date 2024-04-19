import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD28uMffSQrC2JSILWm4nZtKd-woezIosQ",
  authDomain: "roller-coasters-2024.firebaseapp.com",
  databaseURL: "https://roller-coasters-2024-default-rtdb.firebaseio.com",
  projectId: "roller-coasters-2024",
  storageBucket: "roller-coasters-2024.appspot.com",
  messagingSenderId: "188171176854",
  appId: "1:188171176854:web:2b6e94c5e6b6dfd8022bb7"
};

export const firebaseApp = initializeApp(firebaseConfig);