import { Link, NavLink } from "react-router-dom"
export default function AppHeader() {
    const menu = [
        {
            id: 1,
            text: 'Home',
            link: '/'
        },
        {
            id: 2,
            text: 'About',
            link: '/about'
        },
        {
            id: 3,
            text: 'Products',
            link: '/products'
        },
    ]
    return (
        <header className=" ">
            <nav className="navbar bg-success mb-4">
                <Link to="/" className="text-decoration-none navbar-brand mx-5 text-decoration-none unstyled"><h1>E-COMMERCE</h1></Link>
                <div className="d-flex gap-5 mx-5 ">
                    {
                        menu.map(item =>
                            <NavLink className="nav-link" to={item.link} key={item.id}>{item.text}</NavLink>
                        )
                    }
                </div>
            </nav>
        </header>
    )
}

