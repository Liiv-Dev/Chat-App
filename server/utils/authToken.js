import jwt from 'jsonwebtoken';

const authToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });

  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // cookie cannot be accessed or modified by the browser
    sameSite: "strict", // cookie is sent only to the same site as the one that originated the request
    secure: process.env.NODE_ENV !== 'development', // cookie is sent only over HTTPS
  });
};

export default authToken;