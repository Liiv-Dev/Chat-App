import express from 'express';
import { signUp } from '../controller/authControllers.js';
import { login } from '../controller/authControllers.js';
import { logout } from '../controller/authControllers.js';

const router = express.Router();

router.post('/signup', signUp);

router.post('/login', login);

router.post('/logout', logout);

export default router;