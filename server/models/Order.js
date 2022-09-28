const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  sweaters: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sweater'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
