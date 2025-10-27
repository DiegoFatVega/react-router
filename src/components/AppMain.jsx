import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function AppMain() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    function fetchData() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data))
            .catch(err => { console.log(err) })
    }

    useEffect(fetchData, []);

    return (
        <main className="bg-white min-hv-100">
            <div className="container-fluid py-4 ">
                <div className="row g-4">
                    {
                        data.map(product =>
                            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card bg-info bg-gradient bg-opacity-10 h-100">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                                    </Link>
                                    <div className="card-body text-center">
                                        <h5 className="cart-title"> {product.title}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </main >

    )
}