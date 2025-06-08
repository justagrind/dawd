document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const pageNumberElem = document.getElementById("page-number");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentPage = 0; // number of flipped pages
  const totalPages = pages.length + 1; // total pages including last back page

  function initPages() {
    pages.forEach((page, i) => {
      if (i < currentPage) {
        page.classList.add("flipped");
        page.style.zIndex = i;
      } else {
        page.classList.remove("flipped");
        page.style.zIndex = totalPages - i;
      }
    });
    updatePageNumber();
    updateButtons();
  }

  function updatePageNumber() {
    pageNumberElem.textContent = `Page ${currentPage + 1} / ${totalPages}`;
  }

  function updateButtons() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;
  }

  function nextPage() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      initPages();
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      initPages();
    }
  }

  prevBtn.addEventListener("click", prevPage);
  nextBtn.addEventListener("click", nextPage);

  initPages();
});
