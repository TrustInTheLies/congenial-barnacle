class CardList {
  constructor(container, Card, api) {
    this.container = container;
    this.Card = Card;
    this.api = api;
  }

  addCard(name, link) {
    const card = new this.Card();
    card.create(name, link);
    card.addEventListeners();
    this.container.appendChild(card.template);
  }

  render() {
    this.api.getInitialCards().then(res => {
      for (let card of res) {
        this.addCard(card.name, card.link);
      }
    });
  }
}
