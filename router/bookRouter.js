import express from 'express';
const router = express.Router();

import {
    addBook,
    getAllBooks,
    getBookById,
} from '../controller/booksController.js';

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);

export default router;
