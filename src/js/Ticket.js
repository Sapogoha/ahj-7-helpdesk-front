import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';

export default class Ticket {
  constructor(ticket) {
    this.id = ticket.id;
    this.name = ticket.name;
    this.description = ticket.description;
    this.status = ticket.status;
    this.created = Number(ticket.created);
  }

  renderDate(timeStamp) {
    const date = new Date(timeStamp);

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mins = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    this.creationDate = `${day}.${month}.${year} ${hours}:${mins}`;
  }

  add() {
    this.renderDate(this.created);

    this.cardEl = document.createElement('div');
    this.cardEl.classList.add('ticket');
    this.cardEl.dataset.id = this.id;

    this.statusEl = document.createElement('div');
    this.statusEl.classList.add('ticket-status');
    this.statusEl.classList.add('icon');
    this.status
      ? this.statusEl.classList.add('status-done')
      : this.statusEl.classList.add('status-todo');
    // this.card.appendChild(this.statusEl);

    this.nameEl = document.createElement('div');
    this.nameEl.classList.add('ticket-name');
    this.nameEl.textContent = this.name;
    // this.card.appendChild(this.nameEl);

    this.timeEl = document.createElement('div');
    this.timeEl.classList.add('ticket-time');
    this.timeEl.textContent = this.creationDate;

    this.controls = document.createElement('div');
    this.controls.classList.add('ticket-controls');

    this.edit = document.createElement('div');
    this.edit.classList.add('control-element');
    this.edit.classList.add('ticket-edit');
    this.edit.classList.add('icon');
    this.delete = document.createElement('div');
    this.delete.classList.add('control-element');
    this.delete.classList.add('ticket-delete');
    this.delete.classList.add('icon');

    this.controls.append(this.edit, this.delete);

    this.descriptionEl = document.createElement('div');
    this.descriptionEl.classList.add('ticket-description');
    this.descriptionEl.classList.add('hidden');
    this.descriptionEl.textContent = this.description;

    this.cardEl.append(
      this.statusEl,
      this.nameEl,
      this.timeEl,
      this.controls,
      this.descriptionEl,
    );

    this.addListeners();

    return this.cardEl;
  }

  addListeners() {
    this.edit.addEventListener('click', () => {
      this.addModal = new EditModal();
    });
    this.delete.addEventListener('click', () => {
      this.addModal = new DeleteModal();
    });
    // this.statusEl.addEventListener('click', () => {
    //   console.log(this.status);
    //   if (this.status) {
    //     this.statusEl.classList.remove('status-todo');
    //     this.statusEl.classList.add('status-done');
    //     this.status = false;
    //   } else {
    //     this.statusEl.classList.remove('status-done');
    //     this.statusEl.classList.add('status-todo');
    //     this.status = true;
    //   }
    //   console.log(this.status);
    // });
  }
}