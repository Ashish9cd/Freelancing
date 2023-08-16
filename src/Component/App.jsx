import Browse from "./Browse";
import Login from "./Login";
import Signup from "./Signup";

function App() {
    return (
      <div>

<BrowserRouter> 

<Navbar/>

     <Routes>
     <Route path='/' element={<Navigate to="home/"/>} />
  
     <Route path='Login' element={<Login></Login>} />
     <Route path='Signup'element={<Signup></Signup>} />





     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;