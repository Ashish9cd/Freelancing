
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Form, Link, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About';
import Addproject from './Component/Addproject';
import Browse from './Component/Browse';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Signup from './Component/Signup';
import UserAuth from './UserAuth';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div>
      <Toaster  possition='top-center' />
    
     <BrowserRouter> 
     <UserProvider>

          <Navbar/>

          
     <Routes>
      <Route path='/' element={ <Navigate to="/home" /> } />
      <Route path ='home' element={ <Home />} />
      <Route path ='login' element={ <Login></Login>} />
      <Route path='navbar' element={ <Navbar></Navbar>}/>
      <Route path='signup' element={ <Signup />}/>
      <Route path='contact' element={ <Contact/>}/>
      <Route path='browse' element={ <UserAuth> <Browse/> </UserAuth>}/>
      <Route path='addproject' element={ <Addproject/>}/>
      <Route path='about us' element={ <About/>}/>
      
      
       
  
     </Routes>
     </UserProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
