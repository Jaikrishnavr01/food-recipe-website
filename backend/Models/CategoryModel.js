const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
        name:String,
        description:String,
        Ingredients:String,
        Instructions:String,
        Image:String,
        video:String,
        Category:String
});

module.exports = mongoose.model('Category', CategorySchema);


