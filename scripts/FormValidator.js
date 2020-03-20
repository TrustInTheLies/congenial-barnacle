class FormValidator {
  constructor(form, input1, input2, button) {
    this.form = form;

    form.addEventListener("input", () => {
      this.setSubmitButtonState(input1, input2, button);
    });
  }

  checkInputValidity(field) {
    const errorMessage = field.closest("div").querySelector(".popup__error");

    if (field.validity.valueMissing) {
      return (errorMessage.textContent = "Это обязательное поле");
    }
    if (field.validity.tooShort || field.validity.tooLong) {
      return (errorMessage.textContent = "Должно быть от 2 до 30 символов");
    }
    if (field.validity.typeMismatch) {
      return (errorMessage.textContent = "Здесь должна быть ссылка");
    }
    errorMessage.textContent = "";
  }

  setSubmitButtonState(field1, field2, button) {
    if (this.checkInputValidity(field1)) {
      button.classList.add("popup__button_disabled");
      return button.setAttribute("disabled", "disabled");
    }
    if (this.checkInputValidity(field2)) {
      button.classList.add("popup__button_disabled");
      return button.setAttribute("disabled", "disabled");
    }
    button.classList.remove("popup__button_disabled");
    button.removeAttribute("disabled");
  }

  setEventListeners(popup) {
    const inputs = Array.from(popup.getElementsByClassName("popup__input"));

    inputs.forEach(input => {
      popup.addEventListener("input", () => {
        this.checkInputValidity(input);
      });
    });
  }
}
