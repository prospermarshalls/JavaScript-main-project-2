const firstButton = document.getElementById("button-1");
const secondButton = document.getElementById("button-2");
const thirdButton = document.getElementById("button-3");
const fourthButton = document.getElementById("button-4");
const animalNames = document.getElementById("animal-names");
const animalCondition = document.getElementById("h2");
const buttons = document.querySelectorAll(".radio-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the 'clicked' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("clicked"));

    // Add the 'clicked' class to the clicked button
    button.classList.add("clicked");
  });
});

const backgroundHmage = {
  firstButtons: "url('./Gemini_Generated_Image_fme07hfme07hfme0.jpg')",
  secondButtons: "url('./Gemini_Generated_Image_o7ekk9o7ekk9o7ek.jpg')",
  thirdButtons: "url('./Gemini_Generated_Image_qlppthqlppthqlpp.jpg')",
  fourthButtons: "url('./Gemini_Generated_Image_v2wnyhv2wnyhv2wn.jpg')",
};

firstButton.addEventListener("click", () => {
  document.body.style.backgroundImage = backgroundHmage.firstButtons;
  animalNames.style.opacity = 0;
  animalCondition.style.opacity = 0;

  setTimeout(() => {
    animalNames.innerText = "African \n Lion";
    animalCondition.innerText = "Endangered";
    animalNames.style.opacity = 1;
    animalCondition.style.opacity = 1;
  }, 1000);
});

secondButton.addEventListener("click", () => {
  document.body.style.backgroundImage = backgroundHmage.secondButtons;
  animalNames.style.opacity = 0;
  animalCondition.style.opacity = 0;

  setTimeout(() => {
    animalNames.innerText = "Amur \n Leopard";
    animalCondition.innerText = "Critically Endangered";

    animalNames.style.opacity = 1;
    animalCondition.style.opacity = 1;
  }, 1000);
});

thirdButton.addEventListener("click", () => {
  document.body.style.backgroundImage = backgroundHmage.thirdButtons;
  animalNames.style.opacity = 0;
  animalCondition.style.opacity = 0;
  setTimeout(() => {
    animalNames.innerText = "Siberian \n Tiger";
    animalCondition.innerText = "Endangered";

    animalNames.style.opacity = 1;
    animalCondition.style.opacity = 1;
  }, 1000);
});

fourthButton.addEventListener("click", () => {
  document.body.style.backgroundImage = backgroundHmage.fourthButtons;
  animalNames.style.opacity = 0;
  animalCondition.style.opacity = 0;
  setTimeout(() => {
    animalNames.innerText = "Brown \n bear";
    animalCondition.innerText = "Least Concern";

    animalNames.style.opacity = 1;
    animalCondition.style.opacity = 1;
  }, 1000);
});
