import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Routes,Route } from "react-router-dom"
import Addprod from './components/Addprod'


function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Addproducts' element={<Addprod/>}></Route>
      </Routes>
    </>
  )
}

export default App
