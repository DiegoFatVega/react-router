import { Link } from "react-router-dom"

import menu from "../data/menu"

export default function AppFooter() {

    return (
        <footer className=" mt-auto text-light text-center bg-dark">
            <div className="container py-3">
                <h2>Links</h2>
                <ul className="list-unstyled">
                    {
                        menu.map(item => <li key={item.id}>
                            <Link to={item.link} className="text-info-emphasis text-decoration-none"> {item.text}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </footer >

    )
}