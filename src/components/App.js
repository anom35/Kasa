// import { useState, useEffect } from 'react'
import Banner from './Banner'
import Header from './Header'
import Logements from './Logements'
import Footer from './Footer'
import '../styles/App.css';
import '../styles/Style.css';

function App() {
  return (
    <div className='base-desktop'>
        <Banner />
        <Header />
        <Logements />
        <Footer />
    </div>
  );
}

export default App;
