const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const { validateAddUser } = require("../validations/userValidation");
const generateToken = require("../utils/generateToken");

const addUser = async (req, res) => {
  //validate a user
  const { error } = validateAddUser.validate(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  //complexity level and hashing using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //find user from db
  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) return res.status(403).send("email already exist");

  const newUser = await User.create({
    email: req.body.email,
    password: hashedPassword,
  });

  res.status(201).json({
    _id: newUser._id,
    email: newUser.email,
    password: newUser.password,
    token: generateToken(newUser._id),
  });
};

const userLogin = async (req, res) => {
  //user verification
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("account not found");

  //password verification
  const verifiedPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!verifiedPassword)
    return res.status(404).send("invalid email or password");

  res.status(202).json({
    _id: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
};

module.exports = { addUser, userLogin };
