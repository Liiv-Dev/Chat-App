import User from '../models/User.js';

// Sign up User
export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender} = req.body;

    if (password !== confirmPassword) return res.status(400).json({ message: 'Passwords do not match' });

    const user = await User.findOne({ userName });

    if (user) return res.status(400).json({ message: 'Username already exists' });

    // Avatar API https://avatar.iran.liara.run/

    const maleAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const femaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password,
      gender,
      profilePic: gender === "male" ? maleAvatar : femaleAvatar
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      profilePic: newUser.profilePic,
    });

  } catch (error) {
    console.log('Error with signUp Controller',error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}

// Login User
export const login = (req, res) => {


}

// Logout User
export const logout = (req, res) => {


}