import './App.css';
import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import CartProvider from './Context/CartContext';
import {Outlet} from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Home />
        <Outlet />
       <Footer />
     </CartProvider>
    </div>
  );
}

export default App;
