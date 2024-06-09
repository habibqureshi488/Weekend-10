// let container = document.getElementsByClassName('container')
// async function fetchData (){
//     let response = await fetch("https://jsonplaceholder.typicode.com/photos")
//     let data = await response.json()
//     console.log(data);

// for(let i = 0 ; i < 99 ; i ++){
//     console.log(data[i]);
//     console.log(data[i].title);
// }
     
//   {  data.map((itm , ind) => {
        
//     container.innerHTML += `
//     <div class="card" style='width: 18rem}>
//     <img src="${itm.url}" class = "card-img-top" >
//     <div class="card-body">
//       <h5 class="card-title">${itm.id}</h5>
//       <p class="card-text">${itm.title}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
//     `;
    
// })
// }

// }
//  fetchData()




async function fetchData() {
    let container = document.querySelector('.container'); // Correcting container selection
    let response = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await response.json();
    console.log(data);

    for (let i = 0; i < 50; i++) {
        console.log(data[i]);
        console.log(data[i].title);
    }

    data.map((itm, ind) => { // Moving map inside the fetchData function
        container.innerHTML += `
            <div class="card" style="width: 18rem;"> <!-- Correcting the style attribute -->
                <img src="${itm.url}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${itm.id}</h5>
                    <p class="card-text">${itm.title}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        `;
    });
}

fetchData(); // Calling fetchData function
