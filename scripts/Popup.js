export default class Popup {
  constructor() {}

  open(popup) {
    if (
      event.target.classList.contains("user-info__button") ||
      event.target.classList.contains("user-info__edit")
    ) {
      popup.classList.toggle("popup_is-opened");
    }
  }

  close(popup) {
    if (event.target.classList.contains("popup__close")) {
      popup.classList.remove("popup_is-opened");
    }
  }
}
