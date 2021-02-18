const {
  Schema,
  model,
} = require('mongoose');

const exampleSchema = new Schema({
  myNumber: Number,
  myString: String,
}, { versionKey: false });


module.exports = model('Example', exampleSchema);
