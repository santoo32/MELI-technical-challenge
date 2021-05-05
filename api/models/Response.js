class Response {
  constructor() {
    this.payload = {
      author: {
        'name': "Santiago",
        'lastname': "Roa"
      }
      }
  }

  setData(data) {
    data.items ? this.payload.item = data.items : this.payload = data;
    data.categories ? this.payload.categories = data.categories : null;
  }

  setError(err) {
    this.payload.err = err
  }

  addErrorData(err) {
    if (this.payload.error) {
      this.payload.error = { ...this.payload.error, details: {...this.payload.error.details, ...err} }
    } else {
      this.payload.error = err;
    }
  }

  getResponse(res) {
    return res.json(this.payload);
  }
}

module.exports = Response;