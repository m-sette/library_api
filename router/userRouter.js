import express from 'express';
const router = express.Router();

import { addUser, getUser } from '../controller/userController.js';

router.get('/:email', getUser);
router.post('/', addUser);

export default router;
