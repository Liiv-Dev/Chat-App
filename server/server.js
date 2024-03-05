import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes.js';
import connection from './config/connection.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  // root route 
  res.send('YOOOO');
})

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connection()
  console.log(`Server is running on port ${PORT}`);
});