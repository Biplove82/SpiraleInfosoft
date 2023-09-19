const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  //user_id: { type: Number, unique: true },
  userid: String,
  username: String,
  password: String,
  userid: String,
  login_at: {
    type: Date,
    default: Date.now,
  },
  logout_at: {
    type: Date,
    default: Date.now,
  },



  id_proof: { type: Number },
  email: String,


  phone_no: Number,

  joined_on: Number,
  updated_at: Number,
  address: String,
  gender: { type: String, enum: ["male", "Female"] },
  sispl_id: Number,
  emp_id: Number,


},
  { timestamps: true }
);
module.exports = mongoose.model("MEERNN", bookSchema);


//module.exports = mongoose.model("MEERNN", bookSchema);
