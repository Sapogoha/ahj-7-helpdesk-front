export default class Request {
  constructor(serverURL) {
    this.server = serverURL;
  }

  get(params) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('GET', `${this.server}${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            resolve(xhr.response);
          } catch (e) {
            reject(e);
          }
        }
      });
      xhr.send();
    });
  }

  post(method, params, fields) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve) => {
      xhr.open(method, `${this.server}${params}`);
      xhr.addEventListener('load', () => {
        if (xhr.status === 204) {
          resolve(xhr.response);
        }
      });
      xhr.send(fields);
    });
  }

  allTickets() {
    const result = this.get('?method=allTickets');
    return result;
  }
}
