import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Albums from './components/Albums';
import Header from './components/Header';
import Posts from './components/Posts';
import Products from './components/Products';
import { useCart } from './custom-hooks/useCart';

function App() {
  const { cart, addProduct, removeProduct } = useCart();

  return (
    <BrowserRouter>
      <Header cartLength={cart.length} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/albums' element={<Albums />} />
          <Route
            path='/products'
            element={
              <Products
                cart={cart}
                addProduct={addProduct}
                removeProduct={removeProduct}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
