const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

const authMiddleWare = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Unauthorized HTTP, Token not provided" });
  }

  //trim the token

  const jwtToken = token.replace("Bearer", "").trim();


  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const userData = await user.findOne({email: isVerified.email}).select({password:0});

    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = authMiddleWare;
