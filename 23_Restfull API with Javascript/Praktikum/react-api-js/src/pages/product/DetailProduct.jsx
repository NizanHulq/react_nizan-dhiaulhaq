import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DetailProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([
        {
            id: '',
            name: '',
            category: '',
            freshness: '',
            price: '',
        }
    ])
    useEffect(() => {
        const products = getProducts()
        const product = products.find((product) => product.id == id)
        
        setProduct(product)
    }, [])

    const getProducts = () => {
        const getItem = localStorage.getItem("products")

        if (getItem) {
            const parseProducts = JSON.parse(getItem)
            return parseProducts
        }

        return []
    }
    return (<>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Detail Produk</h5>
                            <p className="card-text">Nama Produk: {product.name}</p>
                            <p className="card-text">Kategori: {product.category}</p>
                            <p className="card-text">Kesegaran: {product.freshness}</p>
                            <p className="card-text">Harga: {product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default DetailProduct