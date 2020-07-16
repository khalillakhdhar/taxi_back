var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  id: String,
  nom: String,
  prenom: String,
  email: String,
  mdp: String,
  description: String,

  grade: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
