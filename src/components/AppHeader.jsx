import { Link } from "react-router-dom"
export default function AppHeader() {
    return (
        <header className=" ">
            <nav className="navbar bg-success bg-gradient mb-4">
                <Link to="/" className="text-decoration-none"><a href="" className="navbar-brand mx-5 text-decoration-none unstyled"><h1>E-COMMERCE</h1></a></Link>
                <div className="d-flex gap-5 mx-5">
                    <Link to="/" className="text-decoration-none"><a className="navbar-brand">Home</a></Link>
                    <Link to="/AboutUs" className="text-decoration-none"><a className="navbar-brand">About us</a></Link>
                    <Link to="/Products" className="text-decoration-none"><a className="navbar-brand">Prodcuts</a></Link>
                </div>
            </nav>
        </header>
    )
}
