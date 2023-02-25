import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/index.css';
import Home from './components/Home';
import Error404 from './components/Error404';
import About from './components/About';
import Logement from './components/Logement';


// création des routes
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Logement' element={<Logement />} />
                <Route path='/About' element={<About />} />
                <Route path='*' element={<Error404 />} />
            </Routes> 
        </Router>
    </React.StrictMode>
);


// reportWebVitals();
