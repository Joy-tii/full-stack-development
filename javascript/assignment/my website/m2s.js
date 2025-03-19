
function selectFusion(element) {
  const allCards = document.querySelectorAll('.fusion-card');
  allCards.forEach(card => card.classList.remove('selected'));
  element.classList.add('selected');
  alert(`You selected: ${element.querySelector('h3').innerText}`);
}

// Open Fusion Overlay on Icon Click
document.getElementById('fusion-icon').addEventListener('click', () => {
    document.getElementById('fusion-overlay').style.display = 'flex';
  });

  // Close Overlay Function
  function closeFusion() {
    document.getElementById('fusion-overlay').style.display = 'none';
  }

  // Show Fusion Results or Navigate
  function showFusionResults() {
    const tradition = document.getElementById('tradition-select').value;
    const western = document.getElementById('western-select').value;

    if (tradition && western) {
      // Navigate or Display the fusion product section
      window.location.href = `fusion-products.html?tradition=${tradition}&western=${western}`;
    } else {
      alert('Please select both Traditional and Western styles to view fusion results.');
    }
  }