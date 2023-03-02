import { useEffect, useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './Pages/Home.jsx';
import Loan from './Pages/Loan.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loan" element={<Loan />} />
            </Routes>
        </div>
    );
}

export default App;
