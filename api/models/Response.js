class Response {
  constructor() {
    this.hasError = false;
    this.payload = {
      data: {},
      error: {}
    }
  }

  setData(data) {
    this.payload.data = data;
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
    if (!this.payload.error.message && !this.hasError)
      return res.json(this.payload);
    else
      return res.status(400).json(this.payload);
  }
}

module.exports = Response;