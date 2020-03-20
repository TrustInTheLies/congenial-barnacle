class UserInfo {
  constructor(form, name, job, api) {
    this.form = form;
    this.name = name;
    this.job = job;
    this.api = api;
    // Надо исправить
    // Очень плохая практика в конструкторе выполнять методы класса или устанавливать обработчики.
    // Если другой класс будет наследовать этот, то конструктор выполнится в любом случае,
    // его нельзя переопределить. Но, возможно, наследующему классу не нужно чтобы
    // эти методы выполнялись, а слушатели устанавливались.
    // Конструктор лучше использовать для инициализации переменных класса.
    // Установку слушателей и прочие служебные моменты лучше вынести в отдельные методы.
  }

  setUserInfo() {
    this.api.getInfo().then(data => {
      this.form.name.value = data.name;
      this.form.job.value = data.about;
    });
  }

  updateUserInfo() {
    this.api.getInfo().then(data => {
      this.name.textContent = data.name;
      this.job.textContent = data.about;
    });
  }
}
