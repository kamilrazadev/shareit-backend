const userModel = require("./userModel");

const signUp = async (req, res) => {
  const { username, email } = req.body;

  try {
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
