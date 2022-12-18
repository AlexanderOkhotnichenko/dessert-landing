export function sliderButtonRead(elements) {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle('open-read');
    });
  });
}