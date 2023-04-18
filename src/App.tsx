import React, { Suspense } from 'react';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const Cart = React.lazy(() => import('./pages/Cart'));
const FullItems = React.lazy(() => import('./pages/FullItems'))
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Suspense fallback={<div>loading...</div>}>
          <Cart />
        </Suspense>} />
        <Route path="/item/:id" element={<Suspense fallback={<div>loading...</div>}>
          <FullItems />
        </Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
