const { model, Schema } = require("../connection");

const myschema = new Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  avatar: String,
});

module.exports = model('project', myschema);