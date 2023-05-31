import './App.css';
import Navbar from "./Components/Navbar.js";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Signup from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProducts from './Components/AddProducts';
import Productlist from './Components/ProductList';
import UpdateProducts from './Components/UpdateProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateComponent />}>
        <Route path="/" element={<Productlist />}/>
        <Route path="/addProduct" element={<AddProducts />}/>
        <Route path="/updateProducts/:id" element={<UpdateProducts />}/>
        <Route path="/userprofile" element={<h1>User profile component</h1>}/>
        <Route path="/logout" element={<h1>Logout Component</h1>}/>
        </Route>
      </Routes>
    <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
