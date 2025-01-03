const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
    try {
      const { email, password } = req.body;
      // validate inputs
      if (!email || !password) {
        return res.status(400).json({ message: "all fields must be provided" });
      }
      // find user by email
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      // compare password
      await bcrypt.compare(password, user.password, (err, data) => {
        if (!data) {
          return res.status(400).json({ message: "Invalid password" });
        } else {
          const authClaims = {
            id: user._id,
            role: user.role,
            email: user.email,
          };
          const token = jwt.sign({ authClaims }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });
          return res.status(200).json({
            token: token,
            Userinfo: user
          });
        }
      });
  
      // generate token
    } catch (err) {
      return res
        .status(400)
        .json({ message: " User signin failed internal server error" });
    }
  };
