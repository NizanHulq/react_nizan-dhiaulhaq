function Table() {
    return (
        <>
            <table className="table table-bordered" id="productTable">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Image Of Product</th>
                        <th scope="col">Product Freshness</th>
                        <th scope="col">Additional Description</th>
                        <th scope="col">Product Price</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    )
}

export default Table