const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    mobileNumbers: [
        {
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
            id: String,
            serialNumber: Number,
            quantity: Number,
        },
    ],
    totalPrice: Number,
    orderedDate: String,
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel