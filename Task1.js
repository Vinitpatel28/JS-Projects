// JavaScript to handle the form submission, display feedback and log to the console
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form input values
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
    
    // Check if inputs are not empty
    if (name && feedback) {
      // Display the feedback on the page
      document.getElementById('feedbackOutput').innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Feedback:</strong> ${feedback}
      `;
      
      // Log the feedback in the console
      console.log("Feedback received:");
      console.log("Name: " + name);
      console.log("Feedback: " + feedback);
      
      // Clear the form fields after submission
      document.getElementById('feedbackForm').reset();
    } else {
      alert('Please fill in both fields before submitting!');
    }
  });