const jwt = require("jsonwebtoken");
const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ messeg: "User don't have token" });
    }

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);

    if (!isTokenValid) {
      return res.status(400).json({ messeg: "User don't have Valid token" });
    }

    req.userId = isTokenValid.userId;
    next();
  } catch (error) {
    return res.status(500).json({ messeg: `user Authentication ${error}` });
    console.log("user Authentication ", error);
  }
};

module.exports = { isAuth };
