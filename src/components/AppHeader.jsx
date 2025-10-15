import { Link } from "react-router-dom"
export default function AppHeader() {
    return (
        <header className=" ">
            <nav className="navbar bg-success bg-gradient mb-4">
                <Link to="/" className="text-decoration-none navbar-brand mx-5 text-decoration-none unstyled"><h1>E-COMMERCE</h1></Link>
                <div className="d-flex gap-5 mx-5">
                    <Link to="/" className="text-decoration-none navbar-brand">Home</Link>
                    <Link to="/AboutUs" className="text-decoration-none navbar-brand">About us</Link>
                    <Link to="/Products" className="text-decoration-none navbar-brand">Prodcuts</Link>
                </div>
            </nav>
        </header>
    )
}
