import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import LoginSignUp from './Pages/Log/LoginSignUp';
import ProtectedRoutes from './Components/ProtectedRoutes';
import Order from './Pages/Orders/Order';
import Product from './Pages/Product/Product';
import Restaurant from './Pages/Restaurant/Restaurant';
import Search from './Pages/Search/Search';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Restaurant' element={<Restaurant/>}/>
        <Route path='/order' element={<ProtectedRoutes>
          <Order />
        </ProtectedRoutes>} />
        <Route path='/loginSignUp/*'
          element={
            <ProtectedRoutes>
              <LoginSignUp />
            </ProtectedRoutes>
          }>
          <Route path="" element={<Navigate to="login" />} />
          <Route path='login' element={<Login />} />
          <Route path='signUp' element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
