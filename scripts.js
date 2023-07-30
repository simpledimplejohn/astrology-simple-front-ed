// scripts.js

import { User } from './userModel.js'
const form = document.getElementById('astrologyForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // get the elements from the form
    const nameI = document.getElementById('name');
    const birthdateI = document.getElementById('birthdate');
    const birthtimeI = document.getElementById('birthtime');
    const latitudeI = document.getElementById('latitude');
    const longitudeI = document.getElementById('longitude');
    // add the elements to an object
    const data = {
        name: nameI.value,
        birthdate: birthdateI.value,
        birthtime: birthtimeI.value,
        latitude: latitudeI.value,
        longitude: latitudeI
    }
    // create a new object from the model and add the elements to that model
    const user = new User(
        data.name,
        data.birthdate,
        data.birthtime,
        data.latitude,
        data.longitude
        )
    console.log(user)


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