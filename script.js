const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let current = 0;

nextBtn.addEventListener('click', () => {
  if (current < pages.length) {
    pages[current].classList.add('flipped');
    current++;
  }
});

prevBtn.addEventListener('click', () => {
  if (current > 0) {
    current--;
    pages[current].classList.remove('flipped');
  }
});
