var mongoose = require('mongoose');
var schema = mongoose.schema;

var memberSchema = new schema({
    name: String,
    email: String,
    status: String
});

module.exports = mongoose.model('Member', memberSchema);