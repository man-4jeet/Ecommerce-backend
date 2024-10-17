const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  name: { type: String, required: true ,unique:true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  number: {  type: String, required: true ,unique:true}
});
const Users = mongoose.model("Users", userSchema);

module.exports = Users;