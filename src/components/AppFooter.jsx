import { Link } from "react-router-dom"

export default function AppFooter() {

    return (
        <footer className=" mt-auto text-light text-center bg-dark">
            <div className="container py-3">
                <h2>Links</h2>
                <ul className="list-unstyled">
                    <li><Link to="/" className="text-info-emphasis text-decoration-none"> Home </Link></li>
                    <li><Link to="/about" className="text-info-emphasis text-decoration-none"> About Us </Link></li>
                    <li><Link to="/products" className="text-info-emphasis text-decoration-none"> Products </Link></li>
                </ul>
            </div>
        </footer >

    )
}