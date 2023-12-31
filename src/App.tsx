import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product.tsx';
import Pricing from './pages/Pricing.tsx';
import HomePage from './pages/HomePage.tsx';
import PageNotFound from './pages/PageNotFound.tsx';
import AppLayout from './pages/AppLayout.tsx';
import Login from './pages/Login.tsx';
import { AuthProvider } from './contexts/FakeAuthContext.tsx';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
