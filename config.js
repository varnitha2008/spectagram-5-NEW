import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCfLe1ApQnxDieRnpuUTD3BxOTLL-Lq86A",
    authDomain: "fruit2-f29eb.firebaseapp.com",
    databaseURL: "https://fruit2-f29eb-default-rtdb.firebaseio.com",
    projectId: "fruit2-f29eb",
    storageBucket: "fruit2-f29eb.appspot.com",
    messagingSenderId: "597340375082",
    appId: "1:597340375082:web:3cc5fba3833f7b4359db53"
  };

let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();