import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <section className="products">
      <h1>Products</h1>

      <nav>
        <Link to="/products/car">Cars</Link>
        <Link to="/products/bike">Bikes</Link>
      </nav>

      <Outlet/>
    </section>
  )
}