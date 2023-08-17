// import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import SignUp from './Component/SignUp';
import PrivateComp from './Component/PrivateComp';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import Productlist from './Component/Productlist';
import UpdateProduct from './Component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
         <Routes>
          <Route element= {<PrivateComp/>}>
          <Route path='/' element= {<Productlist/>} />
          <Route path='/add' element= {<AddProduct/>} />
          <Route path='/update/:id' element= {<UpdateProduct/>} />
          <Route path='/update' element= {<UpdateProduct/>} />
          <Route path='/logout' element= {<h1>logout</h1>} />
          <Route path='/profile' element= {<h1>Profile component</h1>} />
          </Route>
          <Route path='/signup' element= {<SignUp/>} />
          <Route path='/login' element= {<Login/>}/>
         </Routes>
         <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
