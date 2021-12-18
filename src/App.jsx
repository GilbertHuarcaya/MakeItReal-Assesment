import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import ProductDetail from './components/ProductDetail';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Menu />}>
        <Route path="" element={<Home />} />
        <Route path="detalle" element={<Product />}>
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="About" element={<About />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>Theres nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
