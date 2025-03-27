const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    firstline: String,
    secondline: String,
    thirdline: String,
    fourdline: String
}, { collection: 'DataForms' }); // Name of collection

const FormData = mongoose.model('FormData', FormDataSchema);
module.exports = FormData;