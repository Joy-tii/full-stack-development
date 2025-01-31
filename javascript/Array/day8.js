
const fruits = ["Banana", "Orange", "Apple"];
updateUI(); // Initial display

function myFunction() {
  fruits.push("Lemon"); // Push new element
  updateUI(); // Update UI
}

function updateUI() {
  document.getElementById("demo").innerHTML = fruits.map((fruit, index) => {
    if (index === fruits.length - 1) {
      return `<span style="color: red; font-weight: bold;">${fruit}</span>`; // Wrap the new element
    }
    return fruit;
  }).join(", "); // Join array elements with commas
}


