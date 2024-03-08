import User from '../models/User.js';
import bcryptjs from 'bcryptjs';
import authToken from '../utils/authToken.js';

// Sign up User
export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender} = req.body;

    if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' });

    const user = await User.findOne({ userName });

    if (user) return res.status(400).json({ message: 'Username already exists' });

    // Hash the password
    const salt = await bcryptjs.genSalt(12);
    const hashPassword = await bcryptjs.hash(password, salt);

    // Avatar API https://avatar.iran.liara.run/

    const maleAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? maleAvatar : femaleAvatar
    });

    if(newUser) {
      // JWT token for user authentication
      authToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: 'Invalid User Data' });
    }

  } catch (error) {
    console.log('Error with signUp Controller',error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}

// Login User
export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!user || !isPasswordCorrect) 
    return res.status(400).json({ message: 'Invalid credentials' }); 

    // JWT token for user authentication
    authToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });

  } catch (error) {
    console.log('Error with login Controller', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}

// Logout User
export const logout = async (req, res) => {
  try {
    res.cookie('token', '', { maxAge: 0 });
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.log('Error with logout Controller', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}