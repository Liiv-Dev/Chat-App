import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: 'Unauthorized - No Token' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: 'Unauthorized - Invalid token' });

    const user = await User.findById(decoded.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    req.user = user;

    next();

  } catch (error) {
    console.log('Error with protectRoute Middleware', error);
    res.status(500),json({ message: 'Something went wrong' });
  }
};

export default protectRoute;