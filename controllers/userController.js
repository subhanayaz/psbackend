const UserModel = require('../models/Users');

exports.createUser = async (req, res) => {
    try {
        const data = await UserModel.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const data = await UserModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editUser = async (req, res) => {
    try {
        const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const data = await UserModel.findOneAndDelete({ _id: req.params.id });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
