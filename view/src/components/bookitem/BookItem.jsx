import {useEffect, useState} from 'react';
import './bookItem.scss';

const BookItem = ({book, handBookBasket, basket}) => {
    const [text, setText] = useState('Add');

    const isThere = basket.find((e) => e._id === book._id);

    useEffect(() => {
        if (isThere) {
            setText('Remove');
        } else {
            setText('Add');
        }
    }, [isThere]);
    return (
        <li>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p> Year: {book.published}</p>
            <p> Pages: {book.pages}</p>
            <button onClick={() => handBookBasket(book)}>{text}</button>
        </li>
    );
};
export default BookItem;
