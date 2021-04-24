class Response {
  constructor() {
    this.hasError = false;
    this.payload = {
      author: {
        'name': "Santiago",
        'lastname': "Roa"
      }
      }
  }

  setData(data) {
    this.payload.item = data;
  }

  setError(err) {
    this.hasError = true;
    if (err.message) {
      this.payload.error.message = err.message;
    } else if (Array.isArray(err) && err[0].msg) {
      this.payload.error = {};
      err.map(item => {
        this.payload.error[item.param] = item.msg;
      })
    } else {
      this.payload.error.message = err;
    }
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