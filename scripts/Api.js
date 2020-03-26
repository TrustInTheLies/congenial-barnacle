export default class Api {
  constructor(address, authorization) {
    this.address = address;
    this.authorization = authorization;
  }

  getInfo() {
    return fetch(`${this.address}/users/me`, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        alert(err);
      });
  }

  getInitialCards() {
    return fetch(`${this.address}/cards`, {
      headers: {
        authorization: this.authorization
      }
      // Надо исправить: А почему тут нет catch?
      // При загрузке разве не бывает ошибок?
      // Проверьте и прочие обращения к серверу
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        alert(err);
      });
  }

  sendUserInfo(name, job) {
    return fetch(`${this.address}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this.authorization,
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: `${name}`,
        about: `${job}`
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(err => {
        alert(err);
      });
  }
}
