const userModel = require("./userModel");
const { hash, compare } = require("bcryptjs");

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  // Checking if required fields are present----
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "username, email and password are required fields",
    });
  }

  try {
    // Checking if the email/user already exists-----
    const isUserAlreadyExists = await userModel.findOne({ email: email });
    if (isUserAlreadyExists) {
      return res.status(409).json({
        message: "This Email Already Registered",
      });
    }

    // Creating the Account------

    // Hashing the password to make it secure
    const hashedPass = await hash(password, 12);

    // User payload to create on database
    const payload = {
      email: email,
      username: username,
      password: hashedPass,
    };

    userModel.create({ username, email });
    res.status(201).json({
      message: "Account Created Successfully",
    });
  } catch (err) {
    console.log("Error in Signup", err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({
      allUsers: users,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signUp, getAllUsers };
