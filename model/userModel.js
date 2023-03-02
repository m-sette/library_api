import { Schema, model } from 'mongoose';
import { bookSchema } from './bookModel.js';

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    books_loanded: [bookSchema],
});

const User = new model('User', userSchema);

export default User;
