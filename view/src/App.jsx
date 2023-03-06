import './App.scss';
import {useReducer} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Loan from './Pages/Loan.jsx';
import Layout from './Pages/Layout.jsx';
import {BasketContext} from './context/BasketContext.js';
import {basketReducer} from "./reducer/basketReducer.js";

function App() {
    const [basketState, basketDispatch] = useReducer(basketReducer, {books: []})
    return (
        <BasketContext.Provider value={{basketState, basketDispatch}}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/loan" element={<Loan/>}/>
                    </Route>
                </Routes>
            </div>
        </BasketContext.Provider>
    );
}

export default App;
