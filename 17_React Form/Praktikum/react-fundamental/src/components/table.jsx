import { Link } from "react-router-dom"

function Table({ products, handleDelete }) {
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
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.freshness}</td>
                                    <td>{product.price}</td>
                                    <td>{product.image}</td>
                                    <td><button className="btn btn-danger me-2" onClick={() => handleDelete(product.id)}>Hapus</button><Link className="btn btn-primary" to={`/product/${product.id}`}>Detail</Link></td>
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