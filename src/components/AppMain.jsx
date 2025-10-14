import axios from "axios"
import { useState, useEffect } from "react"

const products = [];

export default function AppMain() {
    const [data, setData] = useState([]);

    function fetchData() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data))

    }
    console.log(data)
    useEffect(fetchData, []);

    return (
        <div className="Container d-flex">
            {
                <div className="card">
                    {
                        data.map(product => (
                            <div className="card-body" key={product.id}> {product.title}
                            </div>
                        ))
                    }

                </div>
            }
        </div>
    )
}