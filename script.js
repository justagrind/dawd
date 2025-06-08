const pages = document.querySelectorAll('.page');
const pageNumberElem = document.getElementById('page-number');
let currentPage = 0;
const totalPages = pages.length;

// Initialize pages: only first page visible (not flipped), others flipped (behind)
function initPages() {
  pages.forEach((page, i) => {
    if (i === 0) {
      page.style.transform = 'rotateY(0deg)';
      page.style.zIndex = totalPages - i;
      page.classList.remove('flipped');
    } else {
      page.style.transform = 'rotateY(-180deg)';
      page.style.zIndex = totalPages - i;
      page.classList.add('flipped');
    }
  });
  updatePageNumber();
}
initPages();

// Flip page forward
function nextPage() {
  if (currentPage >= totalPages - 1) return;

  const page = pages[currentPage];
  page.classList.add('flipped');
  page.style.transform = 'rotateY(-180deg)';
  page.style.zIndex = currentPage; // behind the next pages

  currentPage++;
  updatePageNumber();
}

// Flip page backward
function prevPage() {
  if (currentPage <= 0) return;

  currentPage--;
  const page = pages[currentPage];
  page.classList.remove('flipped');
  page.style.transform = 'rotateY(0deg)';
  page.style.zIndex = totalPages - currentPage;

  updatePageNumber();
}

// Update the page number display
function updatePageNumber() {
  pageNumberElem.textContent = `Page ${currentPage + 1} / ${totalPages}`;
}
