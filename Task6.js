// Function to show the appropriate converter section based on the selection
function showConverter() {
    const converterType = document.getElementById("converter-type").value;
    const tempSection = document.getElementById("temperature-section");
    const massSection = document.getElementById("mass-section");
    const heightSection = document.getElementById("height-section");

    // Hide all sections first
    tempSection.style.display = "none";
    massSection.style.display = "none";
    heightSection.style.display = "none";

    // Show the selected section
    if (converterType === "temperature") {
        tempSection.style.display = "block";
    } else if (converterType === "mass") {
        massSection.style.display = "block";
    } else if (converterType === "height") {
        heightSection.style.display = "block";
    }
}

// Function to convert temperature (Celsius to Fahrenheit and vice versa)
function convertTemperature() {
    const tempInput = document.getElementById("temp").value;
    const celsiusRadio = document.getElementById("celsius");
    const fahrenheitRadio = document.getElementById("fahrenheit");
    const outputDiv = document.getElementById("output");

    if (tempInput === "" || isNaN(tempInput)) {
        outputDiv.innerHTML = "Please enter a valid number for the temperature.";
        console.log("Invalid input for temperature.");
        return;
    }

    let result;

    if (celsiusRadio.checked) {
        result = (tempInput * 9 / 5) + 32;
        outputDiv.innerHTML = `${tempInput}°C is equal to ${result.toFixed(2)}°F.`;
        console.log(`${tempInput}°C is equal to ${result.toFixed(2)}°F.`);
    } else if (fahrenheitRadio.checked) {
        result = (tempInput - 32) * 5 / 9;
        outputDiv.innerHTML = `${tempInput}°F is equal to ${result.toFixed(2)}°C.`;
        console.log(`${tempInput}°F is equal to ${result.toFixed(2)}°C.`);
    }
}

// Function to convert mass (kg to lbs)
function convertMass() {
    const massInput = document.getElementById("mass").value;
    const outputDiv = document.getElementById("mass-output");

    if (massInput === "" || isNaN(massInput)) {
        outputDiv.innerHTML = "Please enter a valid number for the mass.";
        console.log("Invalid input for mass.");
        return;
    }

    const result = massInput * 2.20462; // Conversion from kg to lbs
    outputDiv.innerHTML = `${massInput} kg is equal to ${result.toFixed(2)} lbs.`;
    console.log(`${massInput} kg is equal to ${result.toFixed(2)} lbs.`);
}

// Function to convert height (cm to inches)
function convertHeight() {
    const heightInput = document.getElementById("height").value;
    const outputDiv = document.getElementById("height-output");

    if (heightInput === "" || isNaN(heightInput)) {
        outputDiv.innerHTML = "Please enter a valid number for the height.";
        console.log("Invalid input for height.");
        return;
    }

    const result = heightInput / 2.54; // Conversion from cm to inches
    outputDiv.innerHTML = `${heightInput} cm is equal to ${result.toFixed(2)} inches.`;
    console.log(`${heightInput} cm is equal to ${result.toFixed(2)} inches.`);
}

// Initialize the converter to show the default (Temperature Converter)
window.onload = showConverter;
