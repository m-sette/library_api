import { useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Loan from './Pages/Loan.jsx';
import Layout from './Pages/Layout.jsx';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/loan" element={<Loan />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
