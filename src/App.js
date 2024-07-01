import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

function App() {
    return ( 
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/laptop' element={<ShopCategory  category="laptop"/>}/>
          <Route path='/monitor' element={<ShopCategory category="monitor"/>}/>
          <Route path='/graphics card' element={<ShopCategory  category="graphics card"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    );
}

export default App;