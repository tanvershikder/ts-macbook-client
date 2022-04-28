import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Myitems from './Pages/MyItems/Myitems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
