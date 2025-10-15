import axios from "axios"
import { useState, useEffect } from "react"


export default function AppMain() {
    const [data, setData] = useState([]);

    function fetchData() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data))
    }

    useEffect(fetchData, []);

    return (
        <main>
            <div className="container-fluid mb-5">
                <div className="row g-4">
                    {
                        data.map(product =>
                            <div key={product.id} className="col-12 col-sm 6 col-md-4 col-lg-3">
                                <div className="card h-100">
                                    <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
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