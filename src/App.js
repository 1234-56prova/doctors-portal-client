import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/home'
import Login from './Pages/Authentication/Login/Login'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointments from './Pages/Appointment/MyAppointments/MyAppointments';
import MyReviews from './Pages/Appointment/MyReviews/MyReviews';
import MyHistory from './Pages/Appointment/MyHistory/MyHistory';
import AllUsers from './Pages/DashBoard/AllUsers/AllUsers';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReviews></MyReviews>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
