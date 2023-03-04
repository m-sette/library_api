import {Outlet} from 'react-router-dom';
import Header from '../components/header/Header.jsx';

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};
export default Layout;
