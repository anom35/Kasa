import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/index.css';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import About from './Pages/About';
import Logement from './Pages/Logement';


// création des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} errorElement={<Error404 />} />
                <Route path='/Logement' element={<Logement />} errorElement={<Error404 />} />
                <Route path='/About' element={<About />} errorElement={<Error404 />} />
                <Route path='*' errorElement={<Error404 />} />
            </Routes> 
        </Router>
    </React.StrictMode>
);


// reportWebVitals();
