import './scss/app.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import FullItems from './pages/FullItems';
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<FullItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
