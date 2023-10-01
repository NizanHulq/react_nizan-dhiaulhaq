import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { deleteProduct } from "@/utils/redux/reducer/reducer"


function Table() {
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch()
    return (
        <>
            <table className="table table-bordered" id="productTable">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Product Freshness</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => {
                            return (
                                <tr key={product.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.productFreshness}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.image}</td>
                                    <td><button className="btn btn-danger me-2" onClick={() => dispatch(deleteProduct(product.id))}>Hapus</button><Link className="btn btn-primary" to={`/product/${product.id}`}>Detail</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table