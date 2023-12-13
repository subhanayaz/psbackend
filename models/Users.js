const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    mobileNumbers: [
        {
            _id: false,
            id: String,
            mobile: Number,
        },
    ],
    address: String,
    city: String,
    state: String,
    district: String,
    pincode: Number,
    language: String,
    sno: [
        {
            _id: false,
            id: String,
            serialNumber: Number,
            quantity: Number,
        },
    ],
    totalPrice: Number,
    orderedDate: String,
}, { timestamps: true });

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;