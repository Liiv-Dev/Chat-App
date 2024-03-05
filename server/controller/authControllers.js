import User from '../models/User.js';

// Sign up User
export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender} = req.body;

    if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' });

    const user = await User.findOne({ userName });

    if (user) return res.status(400).json({ message: 'Username already exists' });

    

  } catch (error) {
    console.log(error);
  }
}

// Login User
export const login = (req, res) => {


}

// Logout User
export const logout = (req, res) => {


}