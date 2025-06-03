 const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;

    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      valid = false;
    }

    // Validate message
    if (message === "") {
      document.getElementById("messageError").textContent = "Message is required.";
      valid = false;
    }

    // If all valid, show success message
    if (valid) {
      document.getElementById("successMessage").textContent = "Form submitted successfully!";
      form.reset(); // Optionally clear the form
    }
  });