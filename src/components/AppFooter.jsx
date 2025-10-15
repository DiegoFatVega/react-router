import { Link } from "react-router-dom"

export default function AppFooter() {

    return (
        <footer className=" mt-auto text-light text-center bg-dark">
            <div className="container py-3">
                <h2>Links</h2>
                <ul className="list-unstyled">
                    <li><Link to="/"><a href="" className="text-info-emphasis text-decoration-none"> Home</a></Link></li>
                    <li><Link to="/AboutUs"><a href="" className="text-info-emphasis text-decoration-none"> About Us</a></Link></li>
                    <li><Link to="/Products"><a href="" className="text-info-emphasis text-decoration-none"> Products</a></Link></li>
                </ul>
            </div>
        </footer >

    )
}