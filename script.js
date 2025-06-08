const slidesEl    = document.getElementById('slides');
const slides      = document.querySelectorAll('.slide');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

let current = 0;
const total   = slides.length;

function updateView() {
  // move slides container
  slidesEl.style.transform = `translateX(-${current * 100}%)`;
  // update page number
  pageIndicator.textContent = `Page ${current + 1}/${total}`;
  // toggle button disabled states
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
}

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateView();
  }
});

nextBtn.addEventListener('click', () => {
  if (current < total - 1) {
    current++;
    updateView();
  }
});

// initialize
updateView();
