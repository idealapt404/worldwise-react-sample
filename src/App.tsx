import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product.tsx';
import Pricing from './pages/Pricing.tsx';
import HomePage from './pages/HomePage.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import AppLayout from './pages/AppLayout.tsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
