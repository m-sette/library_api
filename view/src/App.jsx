import './App.scss';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Loan from './Pages/Loan.jsx';
import Layout from './Pages/Layout.jsx';
import { BasketContext } from './context/BasketContext.js';

function App() {
    const [basket, setBasket] = useState([]);
    return (
        <BasketContext.Provider value={{ basket, setBasket }}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/loan" element={<Loan />} />
                    </Route>
                </Routes>
            </div>
        </BasketContext.Provider>
    );
}

export default App;
