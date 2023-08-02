// index.js
// require('dotenv').config();

const form = document.getElementById('astrologyForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // get form values
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const birthtime = document.getElementById('birthtime').value;
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    // Create a request payload
    const requestData = {
        year: new Date(birthdate).getFullYear(),
        month: new Date(birthdate).getMonth() + 1,
        date: new Date(birthdate).getDate(),
        hours: parseInt(birthtime.slice(0, 2)),
        minutes: parseInt(birthtime.slice(3, 5)),
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        timezone: -8, // Adjust this based on the user's timezone
        settings: {
            observation_point: 'topocentric',
            ayanamsha: 'lahiri',
        },
    };

    try {
        const response = await fetch('/api/planets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
            body: JSON.stringify(requestData),
        });

        if(!response.ok) {
            throw new Error('Network request potato failed');
        }
        const result = await response.json();

        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = JSON.stringify(result, null, 2);
    }
    catch (error) {
        console.error('Error', error);
    }
    
});