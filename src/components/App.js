// import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Logements from './Logements'
import Footer from './Footer'
import Main from './Main'
import '../styles/App.css';
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
