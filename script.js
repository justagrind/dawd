const steps = [
  "🎉 Click 'Next' to begin!",
  "🎂 Here's the next step!",
  "🎁 Ready for the gift?",
  "🎈 Final step! Have a great day!"
];

let currentStep = 0;

const cardInner = document.getElementById("cardInner");
const cardFace = document.getElementById("cardFace");
const pageNumber = document.getElementById("pageNumber");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

function updateCard() {
  cardFace.textContent = steps[currentStep];
  pageNumber.textContent = `Page ${currentStep + 1} / ${steps.length}`;
  
  // Flip animation
  cardInner.style.transform = `rotateY(${currentStep * 180}deg)`;
  
  // Buttons enable/disable
  backBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    updateCard();
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateCard();
  }
});

// Initialize on load
updateCard();
