const steps = [
  "🎉 Click 'Next' to begin!",
  "🎂 Here's the next step!",
  "🎁 Ready for the gift?",
  "🎈 Final step! Have a great day!"
];

let currentStep = 0;
const cardInner = document.getElementById("cardInner");
const frontFace = document.getElementById("frontFace");
const backFaceSpan = document.querySelector("#backFace > span");
const pageNumber = document.getElementById("pageNumber");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

let isFrontShowing = true;

function updateContent() {
  pageNumber.textContent = `Page ${currentStep + 1} / ${steps.length}`;

  if (isFrontShowing) {
    frontFace.textContent = steps[currentStep];
    backFaceSpan.textContent = steps[currentStep + 1] || "";
  } else {
    backFaceSpan.textContent = steps[currentStep];
    frontFace.textContent = steps[currentStep - 1] || "";
  }

  backBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

function flipForward() {
  if (currentStep >= steps.length - 1) return;
  currentStep++;
  isFrontShowing = !isFrontShowing;
  cardInner.style.transform = isFrontShowing ? 'rotateX(0deg)' : 'rotateX(180deg)';
  updateContent();
}

function flipBack() {
  if (currentStep <= 0) return;
  currentStep--;
  isFrontShowing = !isFrontShowing;
  cardInner.style.transform = isFrontShowing ? 'rotateX(0deg)' : 'rotateX(180deg)';
  updateContent();
}

nextBtn.addEventListener("click", flipForward);
backBtn.addEventListener("click", flipBack);

updateContent();
