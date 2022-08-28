const User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [users, _] = await User.getAll();

    res.status(200).json({ count: users.length, users });
  } catch (error) {
    next(error);
  }
};

exports.createNewUser = async (req, res, next) => {
  try {
    console.log(req.body);
    let { name, surname, email } = req.body;
    let user = new User(name, surname, email);

    user = await user.save();

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    let userId = req.params.id;

    let [user, _] = await User.getOne(userId);

    res.status(200).json({ user: user[0] });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    let userId = req.params.id;

    let [user, _] = await User.update(userId, req.body);

    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    next(error);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    let userId = req.params.id * 1;

    let [user, _] = await User.deleteOne(userId);

    res.status(204).json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};