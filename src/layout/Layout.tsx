import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './Layout.css'
import Home from '../views/home/Home'
import About from '../views/about/About'
import Contact from '../views/contact/Contact'

export default function Layout() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> |{ " "} 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}