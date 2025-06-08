const pages = Array.from(document.querySelectorAll('.page'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let current = 0;

// initial stacking order
pages.forEach((pg, i) => {
  pg.style.zIndex = pages.length - i;
});

// flip to next page
nextBtn.addEventListener('click', () => {
  if (current < pages.length) {
    pages[current].classList.add('flipped');
    pages[current].style.zIndex = current + 1;
    current++;
    updateButtons();
  }
});

// flip back to prev page
prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    pages[current].classList.remove('flipped');
    pages[current].style.zIndex = pages.length - current;
    updateButtons();
  }
});

// update button disabled states
function updateButtons() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === pages.length;
}

// also allow clicking the top page to go next
pages.forEach((pg, idx) => {
  pg.addEventListener('click', () => {
    if (idx === current && current < pages.length) nextBtn.click();
  });
});
