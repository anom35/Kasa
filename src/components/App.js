import { useState, useEffect } from 'react'
import '../styles/App.css';

function App() {
  return (
    <div>
    <Banner>
      <img src={logo} alt='logo-la-maison-jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <div className='lmj-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
    </div>
    <Footer />
  </div>
  );
}

export default App;
