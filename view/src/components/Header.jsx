import './Header.scss';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <h1>Book Library Api</h1>
            <nav className="nav">
                <NavLink className="nav-item" to="/">
                    Home
                </NavLink>
                <NavLink className="nav-item" to="/loan">
                    Book Loan
                </NavLink>
            </nav>
        </header>
    );
};
export default Header;
