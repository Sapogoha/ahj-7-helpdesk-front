import Request from '../Request';
import server from '../server';

export default class AddModal {
  constructor() {
    this.request = new Request(server);
  }

  init() {
    this.modal = document.createElement('div');
    this.modal.classList.add('form-wrapper');

    this.formEl = document.createElement('form');
    this.formEl.classList.add('add-form');

    this.formHeader = document.createElement('h3');
    this.formHeader.classList.add('add-form-header');
    this.formHeader.classList.add('form-header');
    this.formHeader.textContent = 'Добавить тикет';

    this.formElBody = document.createElement('div');
    this.formElBody.classList.add('form-body');

    this.addNameLable = document.createElement('div');
    this.addNameLable.classList.add('input-lable');
    this.addNameLable.textContent = 'Краткое описание';

    this.addName = document.createElement('input');
    this.addName.classList.add('add-form-name');
    this.addName.classList.add('form-input');
    this.addName.name = 'name';
    this.addName.required = true;

    this.addNameLable.appendChild(this.addName);

    this.addDescriptionLable = document.createElement('div');
    this.addDescriptionLable.classList.add('input-lable');
    this.addDescriptionLable.textContent = 'Подробное описание';

    this.addDescription = document.createElement('textarea');
    this.addDescription.classList.add('add-form-description');
    this.addDescription.classList.add('form-input');
    this.addDescription.name = 'description';
    this.addDescription.required = true;

    this.addDescriptionLable.appendChild(this.addDescription);

    this.formElBody.append(this.addNameLable, this.addDescriptionLable);

    this.formElControls = document.createElement('div');
    this.formElControls.classList.add('modal-controls');

    this.ok = document.createElement('button');
    this.ok.classList.add('modal-control-element');
    this.ok.classList.add('modal-save');
    this.ok.type = 'submit';
    this.ok.textContent = 'Сохранить';
    this.cancel = document.createElement('button');
    this.cancel.classList.add('modal-control-element');
    this.cancel.classList.add('modal-cancel');
    this.cancel.textContent = 'Отмена';
    this.cancel.type = 'reset';

    this.formElControls.append(this.ok, this.cancel);

    this.formEl.append(this.formHeader, this.formElBody, this.formElControls);

    this.modal.appendChild(this.formEl);

    document.body.appendChild(this.modal);

    this.addListeners();
  }

  addListeners() {
    this.cancel.addEventListener('click', () => {
      document.body.removeChild(this.modal);
    });

    this.ok.addEventListener('click', () => {
      this.request.createTicket(this.addName.value, this.addDescription.value);
    });
  }
}
