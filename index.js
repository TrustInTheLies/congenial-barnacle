import "./pages/index.css";
import Card from "./scripts/Card.js";
import CardList from "./scripts/CardList.js";
import Popup from "./scripts/Popup.js";
import UserInfo from "./scripts/UserInfo.js";
import FormValidator from "./scripts/FormValidator.js";
import Api from "./scripts/Api.js";

const edit = document.querySelector(".user-info__edit");
const places = document.querySelector(".places-list");
const formOpen = document.querySelector(".user-info__button");
const info = document.querySelector(".popup_edit");
const form = document.querySelector(".popup_addcard");
const checkFormEdit = document.querySelector(".popup__form_edit");
const checkFormAdd = document.querySelector(".popup__form_add-place");
const formClose = document.querySelector(".popup__close");
const editClose = document.querySelector(".popup__close_edit");
const imageClose = document.querySelector(".popup__close_zoom-image");
const inputName = document.querySelector(".popup__input_type_name");
const inputLink = document.querySelector(".popup__input_type_link-url");
const buttonAddPlace = document.querySelector(".button__popup_add-place");
const buttonEdit = document.querySelector(".popup__button_edit");
const imageZoom = document.querySelector(".popup_zoom-image");
const name = document.querySelector(".user-info__name");
const job = document.querySelector(".user-info__job");
const nameValue = document.querySelector(".popup__input_type_user-name");
const jobValue = document.querySelector(".popup__input_type_user-job");
const url =
  NODE_ENV === "development"
    ? "http://praktikum.tk/cohort8"
    : "https://praktikum.tk/cohort8";

const card = new Card();
const api = new Api(url, "21c2ac68-d624-43ca-90b3-04a9d6cdd7ed");

const cardList = new CardList(places, Card, api);
const popup = new Popup();
const userInfo = new UserInfo(checkFormEdit, name, job, api);
const userFormValidator = new FormValidator(
  checkFormEdit,
  nameValue,
  jobValue,
  buttonEdit
);

const cardFormValidator = new FormValidator(
  checkFormAdd,
  inputName,
  inputLink,
  buttonAddPlace
);

userFormValidator.setEventListeners(checkFormEdit);

cardFormValidator.setEventListeners(checkFormAdd);

cardList.render(api);

userInfo.setUserInfo();

userInfo.updateUserInfo();

form.addEventListener("submit", function(event) {
  event.preventDefault();
  cardList.addCard(inputName.value, inputLink.value);
  form.classList.remove("popup_is-opened");
  checkFormAdd.reset();
  buttonAddPlace.classList.add("popup__button_disabled");
  buttonAddPlace.setAttribute("disabled", "disabled");
});

info.addEventListener("submit", event => {
  event.preventDefault();
  api.sendUserInfo(nameValue.value, jobValue.value).then(() => {
    name.textContent = nameValue.value;
    job.textContent = jobValue.value;
    info.classList.remove("popup_is-opened");
  });
});

formOpen.addEventListener("click", function() {
  popup.open(form);
});

formClose.addEventListener("click", function() {
  popup.close(form);
});

editClose.addEventListener("click", function() {
  popup.close(info);
});

edit.addEventListener("click", function() {
  popup.open(info);
});

places.addEventListener("click", function() {
  card.zoomImage(event, imageZoom);
});

imageClose.addEventListener("click", function() {
  card.zoomImageClose(imageZoom);
});
