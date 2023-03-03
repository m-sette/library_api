import './bookItem.scss';
const BookItem = ({ book }) => {
    return (
        <li>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p> Year: {book.published}</p>
            <p> Pages: {book.pages}</p>
            <button>add</button>
        </li>
    );
};
export default BookItem;
