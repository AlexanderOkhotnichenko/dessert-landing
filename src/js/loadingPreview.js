export function loadingPreview() {
  const preview = document.querySelector(".page-content__background");
  const input = document.querySelector("input[type=file]");
  const file = input.files[0];
  
  if (!file) return;

  const loadingImage = () => {
    preview.src = URL.createObjectURL(file);
    preview.classList.add('new-preview')
  }
  loadingImage();
}