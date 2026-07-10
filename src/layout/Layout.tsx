import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './Layout.css'
import Home from '../views/home/Home'
import About from '../views/about/About'
import Contact from '../views/contact/Contact'
import Products from '../views/products/Products'
import CarProducts from '../views/products/car-products/CarProducts'
import BikeProducts from '../views/products/bike-products/BikeProducts'

export default function Layout() {
  return (
    <BrowserRouter>
      <nav>
        {/* Navigation */}
        <Link to="/">Home</Link> | {" "}
        <Link to="/products">Products</Link> | {" "}
        <Link to="/about">About</Link> |{ " "} 
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={ <Products/>}>
          <Route path="car" element={ <CarProducts/>}/>
          <Route path="bike" element={ <BikeProducts/>}/>
        </Route>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}