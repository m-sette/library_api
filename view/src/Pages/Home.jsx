import { useEffect, useState } from 'react';
import axios from 'axios';
import BookItem from '../components/bookitem/BookItem.jsx';

const Home = () => {
    const [books, setBooks] = useState([]);
    const baseUrl = 'http://localhost:4000';
    useEffect(() => {
        const getBooks = async () => {
            const { data: books } = await axios(`${baseUrl}/api/books`);
            setBooks(books);
        };
        getBooks();
    });

    const displayBooks = (books) => {
        return (
            books &&
            books.map((book) => {
                return <BookItem key={book.id} book={book} />;
            })
        );
    };
    return (
        <div>
            <h1>Home</h1>
            <ul>{displayBooks(books)}</ul>
        </div>
    );
};
export default Home;
