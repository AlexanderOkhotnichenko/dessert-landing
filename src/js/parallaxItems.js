export function parallaxItems(event) {
  const items = document.querySelectorAll(".parallax-item");

  items.forEach((item) => {
    const moveValue = item.getAttribute("data-value");
    let y = (event.clientY * moveValue) / 160;
    let x = (event.clientX * moveValue) / 160;

    item.style.transform = `translate3d(${x}px, ${y}px, 0px)`
  });
}