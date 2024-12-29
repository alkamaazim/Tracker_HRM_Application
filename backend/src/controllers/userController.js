const User = require("../models/User");

// @desc Get all users
// @route GET /api/v1/users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully!",
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

// @desc Create a new user
// @route POST /api/v1/create-user
exports.createUser = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      email,
      password,
      role,
      employeeId,
      otherId,
      maritalStatus,
      nationality,
      dateOfBirth,
      gender,
      aadhaarCard,
      panCardNumber,
      uan,
      esicNumber,
      bankName,
      bankAccountNumber,
      ifscCode,
      bankAccountName,
    } = req.body;

    // Check required fields
    if (!firstName || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "First name, password, and role are required.",
      });
    }

    const newUser = new User({
      firstName,
      middleName,
      lastName,
      email,
      password,
      role,
      employeeId,
      otherId,
      maritalStatus,
      nationality,
      dateOfBirth,
      gender,
      aadhaarCard,
      panCardNumber,
      uan,
      esicNumber,
      bankName,
      bankAccountNumber,
      ifscCode,
      bankAccountName,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully!",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};
