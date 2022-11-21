
import './App.css';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Components/Product/ProductList';
import Panier from './Components/Panier/Panier';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/Product/ProductDetails';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path='/'element={<ProductList/>}/>
        <Route path='/panier' element={<Panier/>}/>
        <Route path='/:idprod' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
