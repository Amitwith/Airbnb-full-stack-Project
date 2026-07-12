const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../config/token");

async function signUp(req, res) {
  try {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (isUserAlreadyExist) {
      return res.status(400).json({ measseg: "User Already Exist" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await userModel.create({ username, email, password: hash });
    console.log("User Created");

    const token = await generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIORMENT === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 1000,
    });

    return res.status(201).json({
      username: user.username,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    return res.status(500).json({ measseg: `signUp error ${error}` });
    console.log(error);
  }
}

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await userModel.findOne({
      email,
    });
    console.log(isUserExist);
    if (!isUserExist) {
      return res.status(400).json({ measseg: "User Does Not Exist" });
    }
    console.log(password, isUserExist.password);
    const isPasswordValid = await bcrypt.compare(
      password,
      isUserExist.password,
    );
    console.log(isPasswordValid);

    if (!isPasswordValid) {
      return res.status(400).json({ measseg: "Incorrect Password" });
    }

    const token = await generateToken(isUserExist._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIORMENT === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 1000,
    });

    return res.status(200).json({
      username: isUserExist.username,
      email: isUserExist.email,
      id: isUserExist._id,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ measseg: `logIn error ${error}` });
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ measseg: "LoggOut Successfully" });
  } catch (error) {
    return res.status(500).json({ measseg: `logOut error ${error}` });
  }
};

module.exports = { signUp, logIn, logOut };
