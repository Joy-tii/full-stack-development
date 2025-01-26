

  // Predefined password
  const password = "Jyoti@123";

  function checkPassword() {
      const input = document.getElementById("password-input").value;
      const error = document.getElementById("password-error");

      if (input === password) {
          document.getElementById("password-screen").style.display = "none";
          document.getElementById("content").style.display = "block";
      } else {
          error.style.display = "block"; // Show error message
      }
  }