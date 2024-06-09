

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";


// let getBtn = document.querySelector("#btn")
// getBtn.addEventListener('click',() => {
//     let getFile = document.getElementById("file")
//     console.log(getFile.files[0]);
// })

// let getFile = document.getElementById("file")
// getFile.addEventListener('change', (e) => {
//     let getImage = document.querySelector('#image')
//     getImage.src = URL.createObjectURL(e.target.files[0])
    

   
   
// })


// const firebaseConfig = {
//   apiKey: "AIzaSyAZcRqDgqFcZIniHxEjDoY3xBsgpwMpQ_Y",
//   authDomain: "fir-smit-3b561.firebaseapp.com",
//   projectId: "fir-smit-3b561",
//   storageBucket: "fir-smit-3b561.appspot.com",
//   messagingSenderId: "959560622234",
//   appId: "1:959560622234:web:5a72bfcaaf77b05b8a3f23",
//   measurementId: "G-Q85GND57WW"
// };

// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const storageRef = ref(storage, `images/${getImage}`);

// const uploadTask = uploadBytesResumable(storageRef, file);

// uploadTask.on('state_changed', 
//   (snapshot) => {

//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//    alert("Error is Save Media")
//    console.log('Error is Save Media');
//   }, 
//   () => {

//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );






import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZcRqDgqFcZIniHxEjDoY3xBsgpwMpQ_Y",
    authDomain: "fir-smit-3b561.firebaseapp.com",
    projectId: "fir-smit-3b561",
    storageBucket: "fir-smit-3b561.appspot.com",
    messagingSenderId: "959560622234",
    appId: "1:959560622234:web:5a72bfcaaf77b05b8a3f23",
    measurementId: "G-Q85GND57WW"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

let getFile = document.getElementById("file");
getFile.addEventListener('change', (e) => {
  let file = e.target.files[0];
  let getImage = document.querySelector('#image');
  getImage.src = URL.createObjectURL(file);

  
  const storageRef = ref(storage, `images/${file.name}`);

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      alert("Error in saving media: " + error.message);
      console.log('Error in saving media:', error.message);
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
       
      });
    }
  );
});
















