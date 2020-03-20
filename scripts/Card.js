class Card {
  constructor(data) {
    this.data = data;
  }

  create(name, link) {
    const template = document.createElement("div");
    this.template = template;
    template.classList.add("place-card");
    template.insertAdjacentHTML(
      "beforeend",
      `
      <div class="place-card__image" style="background-image: url(${sanitizeHTML(
        link
      )})">
      <button class="place-card__delete-icon"></button>
  </div>
  <div class="place-card__description">
      <h3 class="place-card__name">${sanitizeHTML(name)}</h3>
      <button class="place-card__like-icon"></button>
  </div>
    `
    );

    function sanitizeHTML(str) {
      const temp = document.createElement("div");
      temp.textContent = str;
      return temp.innerHTML;
    }

    return this.template;
  }

  addEventListeners() {
    this.template
      .querySelector(".place-card__delete-icon")
      .addEventListener("click", this.remove.bind(this));
    this.template
      .querySelector(".place-card__like-icon")
      .addEventListener("click", this.like.bind(this));
  }

  like(event) {
    event.target.classList.toggle("place-card__like-icon_liked");
  }

  remove() {
    const card = event.target.closest(".place-card");
    card.parentNode.removeChild(card);
  }

  zoomImage(event, image) {
    const imagePath = event.target.style.backgroundImage
      .slice(4, -1)
      .replace(/["']/g, "");
    const imageURL = document.querySelector(".popup_zoom-image_picture");
    if (event.target.classList.contains("place-card__image")) {
      imageURL.setAttribute("src", imagePath);
      image.classList.add("popup_zoom-image_is-opened");
    }
  }

  zoomImageClose(image) {
    image.classList.toggle("popup_zoom-image_is-opened");
  }
}
