import express from 'express';
import {addBookLoan, returnBooks} from '../controller/bookLoanController.js';

const router = express.Router();

router.post('/', addBookLoan).patch('/', returnBooks);
export default router;
