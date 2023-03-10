import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './router/userRouter.js';
import bookRouter from './router/bookRouter.js';
import bookLoanRouter from './router/bookLoanRouter.js';
import { error } from './controller/errorController.js';
import { notFound } from './controller/unknownController.js';

const app = express();
const PORT = process.env.PORT || 4000;
const URI = 'mongodb://localhost:27017/test';

app.use(cors());
app.use(express.json());

await mongoose
    .connect(URI)
    .then(() => console.log('connected to database'))
    .catch((e) => console.error(e));

app.use('/api/books', bookRouter);
app.use('/api/users', userRouter);
app.use('/api/bookLoan', bookLoanRouter);

app.use(notFound);
app.use(error);

app.listen(PORT, () => console.log('Serving on port:', PORT));
