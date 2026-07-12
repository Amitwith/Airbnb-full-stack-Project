const userModel = require("../model/user.model");

const getCurrentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select(-password);
    if (!user) {
      return res.status(400).json({ message: "User does't Exist" });
    }
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Get Current User Error ${error}` });
  }
};

module.exports = { getCurrentUser };
