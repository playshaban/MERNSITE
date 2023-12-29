const User = require("../models/user-model");
const home = async (req, res) => {
  try {
    res.status(200).send("Hello From router page");
  } catch (err) {
    req.send(400).send(err);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Email Already Exists" });
    }
    const userCreated = await User.create({ username, email, phone, password });

    res
      .status(200)
      .json({
        msg: "Registration Successfull",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (err) {
    res.status(500).json({message :"Internal Server Error"});
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExists = await User.findOne({ email });

    if (!isExists) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    //let's call a method from Schema file,  to compaere password

    const isPassvalid = await isExists.comparePassword(password);

    if (isPassvalid) {
      res
        .status(200)
        .json({
          msg: "Login Successfull",
          token: await isExists.generateToken(),
          userId: isExists._id.toString(),
        });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err);
  }
};


//to send user data 
const user = async(req,res,next)=>
{
  try{
    const userData = req.user;

    res.status(200).json({userData});
  }
  catch(err)
  {
    console.log("Error from the user route ", err);
  }
}


module.exports = { home, register , login , user};
