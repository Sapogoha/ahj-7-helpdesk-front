import Ticket from './Ticket';
import Request from './Request';
import AddModal from './modals/AddModal';

export default class Board {
  constructor() {
    this.request = new Request('https://ahj-7-helpdesk-back.herokuapp.com/');
    // this.request = new Request('http://localhost:7070/');
  }

  init() {
    const itemsRequest = this.request.allTickets();
    itemsRequest.then((resolve) => {
      this.data = [];
      JSON.parse(resolve).forEach((item) => this.data.push(item));

      this.drawTickets();
    });
  }

  drawTickets() {
    this.board = document.createElement('section');
    this.board.classList.add('board');

    this.title = document.createElement('div');
    this.title.classList.add('board-title');

    this.addTicket = document.createElement('button');
    this.addTicket.classList.add('add-ticket');
    this.addTicket.textContent = 'Добавить тикет';

    this.title.appendChild(this.addTicket);
    this.board.appendChild(this.title);

    this.ticketList = document.createElement('div');
    this.ticketList.classList.add('ticket-list');

    this.data.forEach((ticket) => {
      const t = new Ticket(ticket).add();

      this.ticketList.appendChild(t);
    });
    this.board.appendChild(this.ticketList);
    document.body.appendChild(this.board);
    this.addListeners();
  }

  addListeners() {
    this.addTicket.addEventListener('click', () => {
      this.addModal = new AddModal().init();
    });
  }
}
