const pages = document.querySelectorAll('.page');
let currentPage = 0;

// Set initial z-index values to stack the pages
pages.forEach((page, index) => {
  page.style.zIndex = pages.length - index;
});

function updatePageNumber() {
  document.getElementById('pageNumber').textContent = currentPage + 1;
}

function nextPage() {
  if (currentPage < pages.length) {
    pages[currentPage].classList.add('flipped');
    pages[currentPage].style.zIndex = currentPage; // Send behind
    currentPage++;
    updatePageNumber();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
    pages[currentPage].style.zIndex = pages.length - currentPage; // Bring forward again
    updatePageNumber();
  }
}

updatePageNumber();
