import {useContext, useEffect, useState} from 'react';
import './bookItem.scss';
import {BasketContext} from "../../context/BasketContext.js";

const BookItem = ({book}) => {
    const [text, setText] = useState('Add')
    const {basketState, basketDispatch} = useContext(BasketContext)

    const isBookPresent = basketState.books.includes(book)

    useEffect(() => {
        if (isBookPresent) {
            setText('Remove');
        } else (
            setText('Add')
        )
    },)

    const handleBasketChange = (book) => {
        if (isBookPresent) {
            basketDispatch({type: 'RETURN_BOOK',})
        } else {
            basketDispatch({type: 'ADD_BOOK', payload: book})
        }
    }

    return (
        <li>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p> Year: {book.published}</p>
            <p> Pages: {book.pages}</p>
            <button onClick={() => handleBasketChange(book)}>{text}</button>
        </li>
    );
};
export default BookItem;
