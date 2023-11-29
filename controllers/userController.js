const UserModel = require('../models/Users');
const AuthModel = require('../models/authModel');
const jwt = require('jsonwebtoken');
const secretKey = 'yourSecretKey';

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

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await AuthModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new AuthModel({
            username,
            password,
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User registration successful',
            user: savedUser,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await AuthModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed. User not found.' });
        }

        if (password !== user.password) {
            console.error('Login failed: Wrong password for user', username);
            return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, secretKey);

        res.json({ message: 'Authentication successful', token: token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: error.message });
    }
};
