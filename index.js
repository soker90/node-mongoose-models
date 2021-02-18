const Promise = require('bluebird');
const mongoose = require('mongoose');

const models = require('./models');
const mongooseConnect = require('./mongoose-connect');

class Models {
  constructor() {
    mongoose.Promise = Promise;
    Object.assign(this, {mongoose}, models);
  }

  async connect(uri, options = null) {
    if (!mongoose) {
      throw new Error('Specify `mongoose` as the first argument');
    }

    if (!uri) {
      throw new Error('Missing an `uri` string to establish mongodb connection');
    }

    Object.assign(options, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    await mongooseConnect(mongoose, uri, options);
    return this;
  }
}

module.exports = new Models();
