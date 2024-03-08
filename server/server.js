import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import connection from './config/connection.js';

const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

// Middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser()); // to parse the incoming cookies


//app.get('/', (req, res) => {
//  // root route 
//  res.send('YOOOO');
//})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () => {
  connection()
  console.log(`Server is running on port ${PORT}`);
});