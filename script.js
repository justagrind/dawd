const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const pageNum = document.getElementById('pageNum');

let currentPage = 0;

function updateBook() {
  pages.forEach((page, i) => {
    if (i <= currentPage) {
      page.style.transform = 'rotateY(-180deg)';
    } else {
      page.style.transform = 'rotateY(0deg)';
    }
  });
  pageNum.textContent = `${currentPage + 1} / ${pages.length}`;
}

// Navigation buttons
nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
});

// Touch swipe support
let startX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = endX - startX;

  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentPage < pages.length - 1) {
      currentPage++;
    } else if (diff > 0 && currentPage > 0) {
      currentPage--;
    }
    updateBook();
  }
});

// Initialize
updateBook();
