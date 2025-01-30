

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

    function togglePassword() {
            const passwordInput = document.getElementById("password-input");
            const eyeButton = document.querySelector(".eye-btn");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                eyeButton.textContent = "🙈"; // Change to closed-eye emoji
            } else {
                passwordInput.type = "password";
                eyeButton.textContent = "👁"; // Change to open-eye emoji
            }
        }