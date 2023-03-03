import { useEffect, useState } from 'react';
import axios from 'axios';

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

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {books &&
                    books.map((book) => {
                        return <li key={book._id}>{book.title}</li>;
                    })}
            </ul>
        </div>
    );
};
export default Home;
