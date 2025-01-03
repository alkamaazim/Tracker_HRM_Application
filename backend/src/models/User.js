// here we can define the schema of users

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    employeeId: { type: String, default: null },
    otherId: { type: String, default: null },
    maritalStatus: { type: String, default: null },
    nationality: { type: String, default: null },
    dateOfBirth: { type: Date, default: null },
    gender: { type: String, default: null },
    aadhaarCard: { type: String, default: null },
    panCardNumber: { type: String, default: null },
    uan: { type: String, default: null },
    esicNumber: { type: String, default: null },
    bankName: { type: String, default: null },
    bankAccountNumber: { type: String, default: null },
    ifscCode: { type: String, default: null },
    bankAccountName: { type: String, default: null },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
