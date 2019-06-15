const mongoose = require("mongoose");
const { Schema } = mongoose;

const SchoolSchema = new Schema({
  school_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    addressLine: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pin_code: { type: Number }
  }
});

// Export the model
module.exports = mongoose.model("School", SchoolSchema);
