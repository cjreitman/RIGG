// models/Carrier.js

const mongoose = require('mongoose');

const CarrierSchema = new mongoose.Schema({
  carrier_id: {
    type: String,
    required: true,
  },
  carrier_name: {
    type: String,
    required: true,
  },
  mc: {
    type: Number,
    required: true,
  },
  dot: {
    type: Number,
  },
  signals: {
    type: String,
  },
  the_precious: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

const Carrier = mongoose.model('carrier', CarrierSchema);
module.exports = Carrier;
