import { Schema, model } from 'mongoose';

export const bookSchema = new Schema({
    title: String,
    author: String,
    published: Date,
    pages: Number,
    loan: Boolean,
});

const Book = new model('Book', bookSchema);

export default Book;
