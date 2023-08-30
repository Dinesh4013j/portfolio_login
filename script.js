document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // You can replace 'portfolio.html' with the actual HTML file you want to redirect to
      window.location.href = "portfolio.html";
    });
  });
  