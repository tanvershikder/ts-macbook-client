import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup'
import Footer from './Pages/Shared/Footer/Footer';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Myitems from './Pages/MyItems/Myitems';
import Manage from './Pages/Manage/Manage';
import Inventory from './Pages/Inventory/Inventory';
import AddMackBook from './Pages/AddProduct/AddMackBook';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddMackBook></AddMackBook>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
