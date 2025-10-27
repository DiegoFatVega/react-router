
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard"
import axios from "axios";
export default function SingleProduct() {

    //destrutturazione di params per ottenere il segmento nell`URL dopo products
    const { id } = useParams()
    //costruisco l`endpoint con l`id per poter ottenere il singolo prodotto (queste info si trovano nella pagina dell`API)
    const endpoint = `https://fakestoreapi.com/products/${id}`
    //vartiabile di stato per poter manipolare la DOM e rendere dinamica la pagina
    const [product, setProduct] = useState(null)
    //costringo all`utente la navigazione in base ai parametri che definisco io
    const navigate = useNavigate()
    //al caricamento della pagina, faccio una richiesta al server del singolo prodotto da mostrare
    useEffect(() => { fetchProduct(endpoint) }, [id])


    function fetchProduct(endpoint) {
        axios.get(endpoint)
            .then(res => {
                setProduct(res.data);
            }).catch(err => {
                console.log(err);
                navigate(-1)
            })
    }


    return (
        <div> {product != null ?
            (
                <ProductCard product={product} />
            ) :
            (
                <div> Loading...
                </div>
            )
        }
        </div>
    )
}