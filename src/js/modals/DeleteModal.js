export default class DeleteModal {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.classList.add('modal-wrapper');

    this.modalEl = document.createElement('div');
    this.modalEl.classList.add('delete-modal');

    this.modalElHeader = document.createElement('h3');
    this.modalElHeader.classList.add('delete-modal-header');
    this.modalElHeader.classList.add('modal-header');
    this.modalElHeader.textContent = 'Удалить тикет';

    this.modalElBody = document.createElement('div');
    this.modalElBody.classList.add('modal-body');
    this.modalElBody.textContent = 'Вы уверены, что хотите удалить тикет? Это действие необратимо.';

    this.modalElControls = document.createElement('div');
    this.modalElControls.classList.add('modal-controls');

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

    this.modalElControls.append(this.ok, this.cancel);

    this.modalEl.append(
      this.modalElHeader,
      this.modalElBody,
      this.modalElControls,
    );

    this.modal.appendChild(this.modalEl);

    document.body.appendChild(this.modal);
  }
}
