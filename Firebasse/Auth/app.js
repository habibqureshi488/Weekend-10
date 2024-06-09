import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";


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
const auth = getAuth(app);
let getBtn = document.querySelector("#btn")
if(getBtn){
    
    getBtn.addEventListener('click',()=>{
    
        let authUser = () => {
            let getEmail = document.querySelector("#semail").value
            let getPass = document.querySelector("#spass").value
            createUserWithEmailAndPassword(auth, getEmail, getPass)
                .then((userCredential) => {
    
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                });
        }
        authUser()
    })
}

let getLbtn = document.querySelector("#lbtn");
if (getLbtn) {
    getLbtn.addEventListener('click', () => {
        let email = document.querySelector("#lemail").value;
        let password = document.querySelector("#lpass").value;
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User login success, redirect to home.html
                window.location.href = 'home.html';
            })
            .catch((error) => {
                console.log(error);
            });
    });
}




