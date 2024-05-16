const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  name_id: { type: String, required: true }, 
  numberpes: { type: Number, required: true }, 
  phone: { type: String, required: true }, 
  datetime: { type: Date, required: true } 
});

module.exports = mongoose.model('Reservation', reservationSchema);