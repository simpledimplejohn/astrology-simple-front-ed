// scripts.js

import { User } from './userModel.js'
const form = document.getElementById('astrologyForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('potato')
    const nameI = document.getElementById('name');

    if(nameI) {
        const data = {
            name: nameI.value
        }
    
    const user = new User(data.name)
    console.log(user)
    } else {
        console.error('potato');
    }

})



/*
// initial test to get the data
document.getElementById("astrologyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form fields and their values
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;
    const birthtime = document.getElementById("birthtime").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    // Display the form data in the console
    console.log("Name:", name);
    console.log("Birthdate:", birthdate);
    console.log("Birth Time:", birthtime);
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
});
*/