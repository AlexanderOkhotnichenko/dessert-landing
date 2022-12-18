import { parallaxItems } from "./parallaxItems";
import { loadingPreview } from "./loadingPreview";
import { handleToOpenModal } from "./handleToOpenModal";
import { form } from "./form";
import { swiperSlider } from "./swiperSlider";
import { sliderButtonRead } from "./sliderButtonRead";

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", parallaxItems);
  document.addEventListener("change", loadingPreview);
  document.addEventListener("click", handleToOpenModal);
  form(document.querySelector('form'));
  swiperSlider();
  sliderButtonRead(document.querySelectorAll('.comment-slider-content__read'));
});