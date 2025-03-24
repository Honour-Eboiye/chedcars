import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Sidebar from './pages/Sidebar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Service from './pages/service/Service'
import Error404 from './pages/other/Error404'
import Footer from './pages/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/services' element={<Service></Service>}/>
          <Route path='/*' element={<Error404></Error404>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App