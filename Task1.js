document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the form values
  const name = document.getElementById('name').value;
  const enrollment = document.getElementById('enrollment').value;
  const email = document.getElementById('email').value;
  const division = document.getElementById('division').value;
  const feedback = document.getElementById('feedback').value;
  const rating = document.getElementById('rating').value;

  // Display only the name in the "Thank You" message
  document.getElementById('responseMessage').textContent = `Thank you, ${name}! `;
  document.getElementById('responseMessage').style.color = 'green';

  // Log the rest of the form data to the console
  console.log("Form Data Submitted:");
  console.log(`Enrollment Number: ${enrollment}`);
  console.log(`Email: ${email}`);
  console.log(`Division: ${division}`);
  console.log(`Feedback: ${feedback}`);
  console.log(`Rating: ${rating}`);

  // Optionally, clear the form
  document.getElementById('feedbackForm').reset();
});
