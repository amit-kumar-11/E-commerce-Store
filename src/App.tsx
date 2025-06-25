import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCart } from './hooks/useCart';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';

function App() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount
  } = useCart();

  const { theme } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header cartItemsCount={getCartItemsCount()} />
          
          <main>
            <Routes>
              <Route 
                path="/" 
                element={<Home onAddToCart={addToCart} />} 
              />
              <Route 
                path="/products" 
                element={<Products onAddToCart={addToCart} />} 
              />
              <Route 
                path="/product/:id" 
                element={<ProductDetail onAddToCart={addToCart} />} 
              />
              <Route 
                path="/cart" 
                element={
                  <Cart 
                    cartItems={cartItems}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeFromCart}
                    cartTotal={getCartTotal()}
                  />
                } 
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;