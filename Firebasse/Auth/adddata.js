

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyASpW3tinjESq6k0Bccjywo4BAtEUyVrZM",
    authDomain: "databse-d2bc9.firebaseapp.com",
    projectId: "databse-d2bc9",
    storageBucket: "databse-d2bc9.appspot.com",
    messagingSenderId: "42074388952",
    appId: "1:42074388952:web:f5781fd7fc0c2829e15aad",
    measurementId: "G-3HGY055C0E"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let btnAdd = document.querySelector("#add")
btnAdd.addEventListener('click', async () => {

    let fname = document.querySelector("#dataname")
    let lname = document.querySelector("#datafname")
    let phone = document.querySelector("#dataphone")


    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: fname.value,
            last: lname.value,
            ph: parseInt(phone.value)
        });
        // If the document addition is successful, you can add your alert here.
        // For example:
        console.log("Document added successfully!");
        alert("Document added successfully!");
    } catch (error) {
        // Handle errors here
        console.error("Error adding document: ", error);
        alert("Error adding document: " + error.message);
    }
    
})

// let readData = document.querySelector("#read")
// readData.addEventListener('click', async() => {
//     const querySnapshot = await getDocs(collection(db, "users"));
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id}`, doc.data());
//     });
// })

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id}`,doc.data());
// });


// bhund wala code
// const unsub = onSnapshot(doc(db, "users"), (doc) => {
//     console.log("Current data: ", doc.data());
// });



// const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
//     snapshot.forEach((doc) => {
//         document.write("Current data: ", JSON.stringify(doc.data()));
//     });
// });