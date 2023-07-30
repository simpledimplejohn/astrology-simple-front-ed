// scripts.js
import { User } from './userModel.js'

const form = document.getElementById('astrologyForm');
form.addEventListener('submit', async (event) => {
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
    // Convert birthdate string to Date object
    data.birthdate = new Date(data.birthdate);
    // create a new object from the model and add the elements to that model
    const user = new User(
        data.name,
        data.birthdate,
        data.birthtime,
        data.latitude,
        data.longitude
    )
    console.log(user)

    try {
        const response = await fetch('http://json.freeastrologyapi.com/planets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer xxxxxxxx`,
            },
            body: JSON.stringify({
                year: user.birthdate.getFullYear(), //parse to get the year
                month: user.birthdate.getMonth() + 1, // parse for month
                date: user.birthdate.getDate(), //parse to get the date
                hours: parseInt(user.birthtime.slice(0, 2)), // slice?
                minutes: parseInt(user.birthtime.slice(6, 8)),
                latitude: parseFloat(user.latitude),
                longitude: parseFloat(user.longitude), // turns text into float
                timezone: -8, // set this with the offset
                settings: {
                    observation_point: 'topocentric',
                    ayanamsha: 'lahiri',
                },
            }),
        });
        if (!response.ok) {
            throw new Error('Network Potato not okay');
        }
        const result = await response.json();
        console.log(result);
        // now you can display the result to the page
    } catch (error) {
        console.error('potato error fetching data', error);
    }
});
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
    console.log("year:", new Date(birthdate).getFullYear());
});
*/