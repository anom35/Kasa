// import { useState, useEffect } from 'react'
import Banner from './Banner'
import Header from './Header'
import Logements from './Logements'
import Footer from './Footer'
import Main from './Main'
import '../styles/App.css';
import '../styles/Style.css';

function App() {
  return (
    <div>
      <Main>
        <Banner />
        <Header />
        <Logements />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
