export class GetCustomersBuilder {
  customerRequest = {
    method: 'GET',
    url: '/restaurant/vendors-list',
  };

  id(id) {
    this.customerRequest.url = `/restaurant/vendors-list/${id}`;
    return this;
  }
  params(params) {
    this.customerRequest.params = params;
    return this;
  }
  build() {
    return this.customerRequest;
  }
}
