export function handleToOpenModal(event) {
  const selection = document.querySelector('.gallery-list');
  const currentTarget = event.target;
  const modal = document.querySelector('#modal');
  const modalImg = modal.querySelector("img");
  const modalTitle = modal.querySelector('.modal-body__title');

  const openToModal = () => {
    modal.classList.remove('out');
    document.body.style.paddingRight = getComputedStyle(document.querySelector('.scroll-fix')).width;
    document.body.classList.add('modal-active');
  }

  const closeToModal = () => {
    if (currentTarget.classList.contains('close-modal')) {
      modal.classList.add('out');
      document.body.classList.remove('modal-active');
      document.body.style.paddingRight = '0px';
    }
  }

  const updateDataModal = () => {
    const imgSrc = currentTarget.src;
    const imgTitle = currentTarget.title;

    modalImg.src = imgSrc;
    modalImg.alt = imgTitle;
    modalImg.title = imgTitle;
    modalTitle.textContent = imgTitle;
  }

  if (currentTarget === selection) return;

  if (currentTarget.classList.contains('_show-modal')) {
    openToModal();
    updateDataModal();
  }

  closeToModal();
}