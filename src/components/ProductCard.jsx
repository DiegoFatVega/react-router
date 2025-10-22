export default function productCard({ product }) {
    return (
        <div key={product.id} className="m-5 col-6 mx-auto " style={{ width: "30%" }} >
            <div className="card bg-warning bg-gradient bg-opacity-10 h-100">
                <img src={product.image} alt={product.title} className="card-img-top p-3" style={{ height: "200px", objectFit: "contain" }} />
                <div className="card-body text-center">
                    <h5 className="cart-title pb-2"> {product.title}</h5>
                    <h6>{product.description} </h6>
                    <h6><b>Category: </b>{product.category} </h6>
                    <h6><b>Rate: </b> {product.rating.rate} </h6>
                </div>
            </div>
        </div >
    )
}