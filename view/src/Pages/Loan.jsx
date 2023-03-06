import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {BasketContext} from '../context/BasketContext.js';

const Loan = () => {
    const {basketState, basketDispatch} = useContext(BasketContext);
    const [lendBooks, setLendBooks] = useState([]);
    const baseUrl = 'http://localhost:4000';

    useEffect(() => {
        const getLendBooks = async () => {
            const {data} = await axios.get(`${baseUrl}/api/users/mc@atom.pl`);
            setLendBooks(data.user.books_loanded);
        };
        getLendBooks();
    }, [lendBooks]);
    const handleRequest = async () => {
        const option = {
            headers: {'Content-Type': 'application/json'},
            email: 'mc@atom.pl',
            book: basketState.books,
        };
        const response = await axios.post(`${baseUrl}/api/bookLoan`, option);
        console.log(response)
        if (response.statusText = 'OK') {
            basketDispatch({type: 'RETURN_BOOK'})
        }
    };

    const handleReturn = async () => {
        const option = {
            headers: {'Content-Type': 'application/json'},
            email: 'mc@atom.pl',
        };
        const response = await axios.patch(`${baseUrl}/api/bookLoan`, option);
        if (response.statusText === 'OK') {
            basketDispatch({type: 'RETURN_BOOK'});
        }
    };

    return (
        <div>
            <h1>Loan Page</h1>
            <h3>Books to loan should appear here.</h3>

            <ul>
                {basketState.books &&
                    basketState.books.map((book) => {
                        return <li key={book._id}>{book.title}</li>;
                    })}
            </ul>
            <button
                onClick={handleRequest}
                disabled={basketState.books.length ? false : true}
            >
                Request Loan
            </button>
            <button
                onClick={handleReturn}
                disabled={lendBooks.length ? false : true}
            >
                Return Books
            </button>

            <h3>Books Lend</h3>
            <ul>
                {lendBooks &&
                    lendBooks.map((book) => {
                        return <li key={book._id}>{book.title}</li>;
                    })}
            </ul>
        </div>
    );
};
export default Loan;
