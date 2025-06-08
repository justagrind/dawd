const steps = [
  "🎉 Click 'Next' to begin!",
  "🎂 Here's the next step!",
  "🎁 Ready for the gift?",
  "🎈 Final step! Have a great day!"
];

let currentStep = 0;
const cardInner = document.getElementById("cardInner");
const frontFace = document.getElementById("frontFace");
const backFace = document.getElementById("backFace");
const pageNumber = document.getElementById("pageNumber");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// Track which face is showing front content
let isFrontShowing = true;

function updateContent() {
  pageNumber.textContent = `Page ${currentStep + 1} / ${steps.length}`;

  // Alternate text on front and back faces depending on flip
  if (isFrontShowing) {
    frontFace.textContent = steps[currentStep];
    backFace.textContent = steps[currentStep + 1] || "";
  } else {
    backFace.textContent = steps[currentStep];
    frontFace.textContent = steps[currentStep - 1] || "";
  }

  // Disable buttons at ends
  backBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

function flipForward() {
  if (currentStep >= steps.length - 1) return;
  currentStep++;
  isFrontShowing = !isFrontShowing;
  cardInner.style.transform = isFrontShowing ? 'rotateY(0deg)' : 'rotateY(180deg)';
  updateContent();
}

function flipBack() {
  if (currentStep <= 0) return;
  currentStep--;
  isFrontShowing = !isFrontShowing;
  cardInner.style.transform = isFrontShowing ? 'rotateY(0deg)' : 'rotateY(180deg)';
  updateContent();
}

nextBtn.addEventListener("click", flipForward);
backBtn.addEventListener("click", flipBack);

updateContent();
