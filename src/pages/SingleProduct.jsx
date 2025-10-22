
import { useParams, useEffect } from "react-router-dom";

export default function SingleProduct() {

    const { id } = useParams()

    useEffect(() => {

    }, []);

    return (
        <div> ID PRODOTTO: {id}</div>
    )
}