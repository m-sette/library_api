import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import './Home.scss';
import BookItem from '../components/bookitem/BookItem.jsx';
import {BasketContext} from '../context/BasketContext.js';

const Home = () => {
    const [books, setBooks] = useState([]);
    const {basketState} = useContext(BasketContext);
    const baseUrl = 'http://localhost:4000';
    useEffect(() => {
        const getBooks = async () => {
            try {
                const {data} = await axios(`${baseUrl}/api/books`);
                setBooks(data);
                // TODO combine books collection without books loaned
            } catch (error) {
                console.error(error.message);
            }
        };
        getBooks();
    }, []);

    return (
        <div className="home-container">
            <h1>Home</h1>
            <h3>Basket: {basketState.books.length}</h3>
            <ul className="book-items">
                {books &&
                    books.map((book) => (
                        <BookItem
                            key={book._id}
                            book={book}
                        />
                    ))}
            </ul>
        </div>
    );
};
export default Home;
