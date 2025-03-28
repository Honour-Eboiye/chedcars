import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Sidebar from './pages/Sidebar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Service from './pages/service/Service'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Error404 from './pages/other/Error404'
import Footer from './pages/Footer'
import SingleProduct from './SingleProduct'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/home' element={<Navigate to='/'/>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/services' element={<Service></Service>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signup' element={<Signup></Signup>}/>
          <Route path='/home/:productId' element={<SingleProduct></SingleProduct>}/>
          <Route path='/*' element={<Error404></Error404>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App