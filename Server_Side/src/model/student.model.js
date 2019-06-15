const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  school_name: { type: String },
  mobile: { type: String },
  imageUrl: { type: String },
  address: {
    addressLine: { type: String },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    pin_code: { type: Number }
  },
  amenities: {
    books: {
      paid: { type: Boolean },
      price: { type: Number },
      paid_by: { type: String },
      paid_at: { type: Date, default: "" }
    },
    stationary: {
      paid: { type: Boolean },
      price: { type: Number },
      paid_by: { type: String },
      paid_at: { type: Date, default: "" }
    },
    uniform: {
      paid: { type: Boolean },
      price: { type: Number },
      paid_by: { type: String },
      paid_at: { type: Date, default: "" }
    },
    fee: {
      paid: { type: Boolean },
      price: { type: Number },
      paid_by: { type: String },
      paid_at: { type: Date, default: "" }
    }
  },
  created_at: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model("Student", StudentSchema);
