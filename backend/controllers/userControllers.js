const User = require("../models/userModel");
//https://zellwk.com/blog/async-await-express/
// this will handle all the errorsn in our app
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/genToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const authUser = asyncHandler(async (req, res) => {
  //to login we need only email and password
  const { email, password } = req.body;

  //checking if the user is already present or not in the database using the FINDONE func of mongo db

  const user = await User.findOne({ email });

  //if the password entered matches with the password in the databse, then returning the details
  if (user && (await user.comparePass(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});

//updating user profile

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); //to update also we need the user id

  if (user) {
    //if user exists
    user.name = req.body.name || user.name; //if user has not put name then enter name
    user.email = req.body.email || user.email;
    if (req.body.password) {
      //if body has password then update it, otherwise do nothing, we don't want to expose the password
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    //sending info to user(Frontend)
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
module.exports = { registerUser, authUser, updateUserProfile };
