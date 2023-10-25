import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setProducts } from "@/utils/redux/reducer/reducer"
import { useEffect, useState } from "react"
import { destroyProduct, getProducts } from "@/utils/api/api"


function Table({ handleEdit }) {
    const products = useSelector((state) => state.product.products)
    const dispatch = useDispatch()

    // const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((res) => dispatch(setProducts(res)))
    }, [])

    const handleDelete = async (id) => {
        const konfirmasi = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
        if (konfirmasi) {
            await destroyProduct(id);
            getProducts().then((res) => dispatch(setProducts(res)));
        }
    }

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
                                    <td>{product.productCat}</td>
                                    <td>{product.productFreshness}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.productImage}</td>
                                    <td><button className="btn btn-danger me-2" onClick={() => { handleDelete(product.id) }}>Hapus</button><Link className="btn btn-primary me-2" to={`/product/${product.id}`}>Detail</Link><button className="btn btn-success" onClick={() => { handleEdit(product) }}>Edit</button></td>
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