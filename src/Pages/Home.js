// import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Logements from '../components/Logements'
import Footer from '../components/Footer'
import Main from '../components/Main'
import '../styles/Home.css';
import '../styles/Style.css';

function App() {
    return (
        <div>
            <Main>
                <Navbar />
                <Banner />
                <Logements />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
