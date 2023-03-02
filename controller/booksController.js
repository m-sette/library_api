import Book from '../model/bookModel.js';
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        console.error(error);
    }
};

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findOne({ _id: id });
        res.json(book);
    } catch (error) {
        console.error(error);
    }
};

export const addBook = async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json({ message: 'success', book });
    } catch (error) {
        console.error(error);
    }
};
