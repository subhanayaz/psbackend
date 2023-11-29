const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const AuthModel = mongoose.model('auth', AuthSchema);
module.exports = AuthModel;
