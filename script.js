const slidesEl      = document.getElementById('slides');
const slides        = Array.from(document.querySelectorAll('.slide'));
const prevBtn       = document.getElementById('prevBtn');
const nextBtn       = document.getElementById('nextBtn');
const pageIndicator = document.getElementById('pageIndicator');

let current = 0;
const total = slides.length;

// initialize: show only the first slide
slides.forEach((s, i) => {
  s.style.visibility = i === 0 ? 'visible' : 'hidden';
});

// update buttons & indicator
function updateControls() {
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === total - 1;
  pageIndicator.textContent = `Page ${current + 1}/${total}`;
}

// do the flip animation from `fromIdx` → `toIdx`
function flipTo(fromIdx, toIdx) {
  const from = slides[fromIdx];
  const to   = slides[toIdx];

  // mark “to” slide as ready behind the scenes
  to.classList.remove('flip-out', 'flip-in');
  to.style.visibility = 'visible';

  // animate the old page turning away...
  from.classList.add('flip-out');
  from.addEventListener('animationend', () => {
    // hide it once its flip-out is done
    from.style.visibility = 'hidden';
    from.classList.remove('flip-out');
  }, { once: true });

  // animate the new page turning into view
  to.classList.add('flip-in');
  to.addEventListener('animationend', () => {
    to.classList.remove('flip-in');
  }, { once: true });

  current = toIdx;
  updateControls();
}

// button handlers
prevBtn.addEventListener('click', () => {
  if (current > 0) flipTo(current, current - 1);
});
nextBtn.addEventListener('click', () => {
  if (current < total - 1) flipTo(current, current + 1);
});

// initial setup
updateControls();
