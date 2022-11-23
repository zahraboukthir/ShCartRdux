
import './App.css';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Components/Product/ProductList';
import Panier from './Components/Panier/Panier';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Components/Product/ProductDetails';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditProduct';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/edit/:idprod" element={<EditProduct/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/'element={<ProductList/>}/>
        <Route path='/panier' element={<Panier/>}/>
        <Route path='/:idprod' element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
