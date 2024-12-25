// JavaScript for interactive map section
function showLocationInfo(location) {
  const locationInfo = document.getElementById('location-info');
  if (location === 'Location A') {
    locationInfo.innerHTML = '<p>Location A: This center is located in City X and specializes in e-waste recycling and resource recovery.</p>';
  } else if (location === 'Location B') {
    locationInfo.innerHTML = '<p>Location B: This center is located in City Y and focuses on e-waste collection and processing.</p>';
  }
}

// JS for the "Learn More" button in the hero section
document.getElementById('learn-more-btn').addEventListener('click', function () {
  alert('Learn more about how you can help manage e-waste!');
});


// Include EmailJS SDK
(function(){
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID
  })();
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
  
    // Send the email via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
      .then(function(response) {
        // Show success message
        document.getElementById('response-message').textContent = 'Your message has been sent successfully!';
        document.getElementById('response-message').classList.remove('hidden');
        document.getElementById('response-message').classList.add('success');
        
        // Clear the form fields
        document.getElementById('contact-form').reset();
      }, function(error) {
        // Show error message
        document.getElementById('response-message').textContent = 'Oops! Something went wrong. Please try again.';
        document.getElementById('response-message').classList.remove('hidden');
        document.getElementById('response-message').classList.add('error');
      });
  });
  
  // Optional: Hide the response message after a few seconds
  setTimeout(function() {
    document.getElementById('response-message').classList.add('hidden');
  }, 5000);
  