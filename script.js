const sheets = document.querySelectorAll('.sheet');
let currentSheet = 0;

function updatePageDisplay() {
  document.getElementById('pageNumber').textContent = currentSheet * 2 + 1;
}

function nextPage() {
  if (currentSheet < sheets.length) {
    sheets[currentSheet].classList.add('flipped');
    currentSheet++;
    updatePageDisplay();
  }
}

function prevPage() {
  if (currentSheet > 0) {
    currentSheet--;
    sheets[currentSheet].classList.remove('flipped');
    updatePageDisplay();
  }
}

updatePageDisplay();
