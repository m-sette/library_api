import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Loan from './Pages/Loan.jsx';
import Layout from './Pages/Layout.jsx';
import {useState} from "react";

function App() {

    const [basket, setBasket] = useState([]);
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home setBasket={setBasket} basket={basket}/>}/>
                    <Route path="/loan" element={<Loan basket={basket} setBasket={setBasket}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
