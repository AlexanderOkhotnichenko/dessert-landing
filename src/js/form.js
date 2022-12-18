import Swal from "sweetalert2";

export function form(form) {
  form.addEventListener("submit", formSend);

  async function formSend(event) {
    event.preventDefault();

    let itemsError = validateInputsForm(form);
    
    if (!itemsError) {
      form.reset();
      Swal.fire(
        'Письмо отправлено!',
        '',
        'success'
      )
    }
  }

  function validateInputsForm(form) {
    let error = 0;
    const regexTelephone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/gm;
    const dataInput = form.querySelectorAll('input[data-require="true"]');
    const itemsRequire = dataInput;
    const textError = form.querySelector('.text-error');
    
    itemsRequire.forEach((input) => {
      removeErrorItem(input);

      if (input.id === 'form-telephone' && input.type === 'tel') {
        if (!input.value.match(regexTelephone)) {
          textError.textContent = 'Укажите корректный номер!';
          addErrorItem(input);
          error++; 
        } else {
          textError.textContent = '';
        }
      }

      if (input.id === 'form-checkbox' && input.type === 'checkbox' && input.checked === false) {
        addErrorItem(input);
        error++;
      }

      if (input.value.trim() === '') {
        textError.textContent = 'Поле пустое!';
      }
    });

    return error;
  }

  function addErrorItem(input) {
    input.parentElement.classList.add('error');
  }

  function removeErrorItem(input) {
    input.parentElement.classList.remove('error');
  }
}