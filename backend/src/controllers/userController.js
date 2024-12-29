const User = require("../models/User");

// @desc Create a new user
// @route POST /api/users
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
