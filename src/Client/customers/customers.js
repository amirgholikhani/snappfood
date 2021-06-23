export class GetCustomersBuilder {
  customerRequest;
  constructor() {
    this.customerRequest = {
      method: 'GET',
      url: '/restaurant/vendors-list',
    };
  }
  id(id) {
    this.customerRequest.url = `/restaurant/vendors-list/${id}`;
    return this;
  }
  params(params) {
    this.customerRequest.params(params);
  }
  build() {
    return this.customerRequest;
  }
}
