import Request from '../Request';
import server from '../server';

export default class EditModal {
  constructor(id) {
    this.request = new Request(server);

    this.id = id;
    this.toEdit = document.querySelector(`[data-id='${id}']`);
    this.name = this.toEdit.querySelector('.ticket-name').innerText;
    this.description = this.toEdit.querySelector(
      '.ticket-description',
    ).innerText;
  }

  init() {
    this.modal = document.createElement('div');
    this.modal.classList.add('form-wrapper');

    this.formEl = document.createElement('form');
    this.formEl.classList.add('edit-form');

    this.formHeader = document.createElement('h3');
    this.formHeader.classList.add('edit-form-header');
    this.formHeader.classList.add('form-header');
    this.formHeader.textContent = 'Изменить тикет';

    this.formElBody = document.createElement('div');
    this.formElBody.classList.add('form-body');

    this.addNameLable = document.createElement('div');
    this.addNameLable.classList.add('input-lable');
    this.addNameLable.textContent = 'Краткое описание';

    this.addName = document.createElement('textarea');
    this.addName.classList.add('edit-form-name');
    this.addName.classList.add('form-input');
    this.addName.name = 'name';
    this.addName.required = true;
    this.addName.textContent = this.name;

    this.addNameLable.appendChild(this.addName);

    this.addDescriptionLable = document.createElement('div');
    this.addDescriptionLable.classList.add('input-lable');
    this.addDescriptionLable.textContent = 'Подробное описание';

    this.addDescription = document.createElement('textarea');
    this.addDescription.classList.add('edit-form-description');
    this.addDescription.classList.add('form-input');
    this.addDescription.name = 'description';
    this.addDescription.required = true;
    this.addDescription.textContent = this.description;

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
      document.body.removeChild(this.modal);
      this.editTicket(this.id, this.addName.value, this.addDescription.value);
    });
  }

  editTicket(id, name, description) {
    const request = this.request.editTicket(id, name, description);
    request.then(() => {
      const editedTicket = document.querySelector(`[data-id='${id}']`);
      const ticketName = editedTicket.querySelector('.ticket-name');
      const ticketDescription = editedTicket.querySelector(
        '.ticket-description',
      );

      ticketName.textContent = this.addName.value;
      ticketDescription.textContent = this.addDescription.value;
    });
  }
}
