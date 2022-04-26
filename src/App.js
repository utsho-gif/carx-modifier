
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import SignUp from './Pages/Login/SignUp/SignUp';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout/:serviceId' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/addservice' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>
        <Route path='/manageservices' element={<RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>}></Route>
        <Route path='/orders' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route> 
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
