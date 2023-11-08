import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
const signup = async (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassord = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassord });
  try {
    await newUser.save();
    res.status(201).json("'User created successfully!");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export default signup;
