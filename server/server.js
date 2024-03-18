import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import userRoutes from './routes/userRoutes.js';

import connection from './config/connection.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 3001;
const __dirname = path.resolve();

dotenv.config();

// Middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser()); // to parse the incoming cookies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

//app.get('/', (req, res) => {
//  // root route 
//  res.send('YOOOO');
//})

// Serve static assets if in production
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist/index.html'));
});

server.listen(PORT, () => {
  connection()
  console.log(`Server is running on port ${PORT}`);
});