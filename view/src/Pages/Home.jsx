import {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.scss';
import BookItem from '../components/bookitem/BookItem.jsx';

const Home = ({setBasket, basket}) => {
    const [books, setBooks] = useState([]);
    const baseUrl = 'http://localhost:4000';
    useEffect(() => {
        const getBooks = async () => {
            const {data: books} = await axios(`${baseUrl}/api/books`);
            setBooks(books);
        };
        getBooks();
    }, []);

    const handleBookBasket = (book) => {
        if (!basket.includes(book)) {
            setBasket((prev) => prev.concat(book));
        } else {
            setBasket((prev) => prev.filter((el) => el._id !== book._id));
        }
    };

    return (
        <div className="home-container">
            <h1>Home</h1>
            <ul className="book-items">
                {books &&
                    books.map((book) => (
                        <BookItem
                            key={book._id}
                            handBookBasket={handleBookBasket}
                            basket={basket}
                            book={book}
                        />
                    ))}
            </ul>
        </div>
    );
};
export default Home;
