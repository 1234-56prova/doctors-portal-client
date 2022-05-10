import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/home'
import Login from './Pages/Authentication/Login/Login'
import Registration from './Pages/Authentication/Registration/Registration'
import Header from './Pages/Shared/Header/header'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
