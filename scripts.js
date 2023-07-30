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