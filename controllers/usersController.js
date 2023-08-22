const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const generateToken = require("../utils/generateToken.js");

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {
    username,
    email,
    password,
    address,
    postcode,
    dateOfBirth,
    firstName,
    lastName,
    profilePicture,
    mobileNumber,
    trader,
    location,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    email,
    password,
    address,
    postcode,
    dateOfBirth,
    firstName,
    lastName,
    profilePicture,
    mobileNumber,
    trader,
    location,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      address: user.address,
      postcode: user.postcode,
      dateOfBirth: user.dateOfBirth,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
      mobileNumber: user.mobileNumber,
      trader: user.trader,
      location: user.location,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      address: user.address,
      postcode: user.postcode,
      dateOfBirth: user.dateOfBirth,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
      mobileNumber: user.mobileNumber,
      trader: user.trader,
      location: user.location,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.postcode = req.body.postcode || user.postcode;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.profilePicture = req.body.profilePicture || user.profilePicture;
    user.mobileNumber = req.body.mobileNumber || user.mobileNumber;
    user.trader = req.body.trader || user.trader;
    user.location = req.body.location || user.location;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: user.username,
      email: user.email,
      address: user.address,
      postcode: user.postcode,
      dateOfBirth: user.dateOfBirth,
      firstName: user.firstName,
      lastName: user.lastName,
      profilePicture: user.profilePicture,
      mobileNumber: user.mobileNumber,
      trader: user.trader,
      location: user.location,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};

