export default class Request {
  constructor(serverURL) {
    this.server = `${serverURL}tickets`;
  }

  get(params) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', `${this.server}${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(xhr.response);
          } catch (err) {
            reject(err);
          }
        }
      });
      xhr.send();
    });
  }

  post(method, param, params) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve) => {
      xhr.open(method, `${this.server}${param}`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 204) {
          resolve(xhr.response);
        }
      });
      xhr.send(params);
    });
  }

  allTickets() {
    return this.get('?method=allTickets');
  }

  ticketById(id) {
    return this.get(`?method=ticketById&id=${id}`);
  }

  createTicket(name, description) {
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('description', description);
    return this.post('POST', '?method=createTicket', params);
  }

  editTicket(id, name, description) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('name', name);
    params.append('description', description);
    return this.post('PUT', '?method=editById', params);
  }

  changeStatus(id) {
    const params = new URLSearchParams();
    params.append('id', id);
    return this.post('PUT', '?method=changeStatus', params);
  }

  removeTicket(id) {
    const params = new URLSearchParams();
    params.append('id', id);
    return this.post('DELETE', `/remove/${id}`, params);
  }
}
