document.getElementById('generateButton').addEventListener('click', function() {
    // Get the password length from the input
    const length = parseInt(document.getElementById('passwordLength').value);
    
    // Validate the length to ensure it's within the valid range (12 to 64)
    if (length < 12 || length > 64) {
        alert("Password length must be between 12 and 64 characters.");
        return;
    }

    // Get whether each type of character should be included
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecial = document.getElementById('includeSpecial').checked;

    // Validate if at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        alert("You must select at least one character type.");
        return;
    }

    // Define character sets
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    // Combine selected character sets
    let characterPool = '';
    if (includeLowercase) characterPool += lowercase;
    if (includeUppercase) characterPool += uppercase;
    if (includeNumbers) characterPool += numbers;
    if (includeSpecial) characterPool += specialCharacters;

    // Generate the random password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // Display the generated password in the input field
    document.getElementById('generatedPassword').value = password;

    // Log the password to the console (optional for debugging)
    console.log("Generated password:", password);
});
