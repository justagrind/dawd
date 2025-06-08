const pages = document.querySelectorAll('.page');
let currentPage = 0;

function updatePageNumber() {
  document.getElementById('pageNumber').textContent = currentPage + 1;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add('flipped');
    currentPage++;
    updatePageNumber();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    pages[currentPage].classList.remove('flipped');
    updatePageNumber();
  }
}

updatePageNumber();

