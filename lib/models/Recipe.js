const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  measurement: {
    type: String,
    required: true,
    enum: ['teaspoon', 'tablespoon', 'cup', 'ounce', 'grams']
  },
  ingredientName: {
    type: String,
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  directions: [String],
  ingredients: [ingredientSchema]
});

module.exports = mongoose.model('Recipe', schema);
