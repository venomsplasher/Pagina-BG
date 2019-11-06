import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyB82sblg9qLj6j3OPjV57C5H_6Xs8-rLa8",
    authDomain: "paginabg-b5a62.firebaseapp.com",
    databaseURL: "https://paginabg-b5a62.firebaseio.com",
    projectId: "paginabg-b5a62",
    storageBucket: "paginabg-b5a62.appspot.com",
    messagingSenderId: "108911868420",
    appId: "1:108911868420:web:4840b9f780bd4cb50f1351"
 
});

export const db = app.database();
export const namesRef = db.ref('names');
export const Productos = db.ref('Productos');