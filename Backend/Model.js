const mongoose = require('mongoose');

const financialDataSchema = new mongoose.Schema({
  income: {
    type: Number,
    required: true,
    min: [0, 'Income cannot be negative'],
  },
  expenses: {
    type: Number,
    required: true,
    min: [0, 'Expenses cannot be negative'],
  },
  savings: {
    type: Number,
    required: true,
    min: [0, 'Savings cannot be negative'],
  },
  advice: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('FinancialData', financialDataSchema);
