import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import './Layout.css'
import Home from '../views/home/Home'
import About from '../views/about/About'
import Contact from '../views/contact/Contact'
import Products from '../views/products/Products'
import CarProducts from '../views/products/car-products/CarProducts'
import BikeProducts from '../views/products/bike-products/BikeProducts'

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});


export default function Layout() {
  return (
    <BrowserRouter>
      <nav>
        {/* Navigation */}
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> | {" "}
        <NavLink to="/products" style={navLinkStyles}>Products</NavLink> | {" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{ " "} 
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
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