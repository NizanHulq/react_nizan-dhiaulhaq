import React, { Component } from "react"

import '../../styles/style.css'
import bootstrapLogo from '../../assets/bootstrap-logo.svg'
import Header from '../../components/header'
import Table from '../../components/table'
import texts from '../../utils/constants/locale.json'
import { BiErrorCircle } from "react-icons/bi";

class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            productCat: '',
            productImage: '',
            productFreshness: '',
            productDescription: '',
            productPrice: '',
            error: '',
            lang: 'en',
            text: texts.article,
        }
    }

    handleProductNameChange = (e) => {
        const { value } = e.target
        this.setState({ productName: value })
        if (value.length >= 25) {
            this.setState({ error: 'Product name must not exceed 25 characters.' })
        } else {
            this.setState({ error: '' })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {
            productName,
            productCat,
            productImage,
            productFreshness,
            productDescription,
            productPrice
        } = this.state

        if (!productName.trim()) {
            this.setState({ error: 'Please enter a valid product name.' })
        }
        if (!productCat.trim()) {
            this.setState({ error: 'Please select a valid product category.' })
        }
        if (!productImage.trim()) {
            this.setState({ error: 'Please select a valid product image.' })
        }
        if (!productFreshness.trim()) {
            this.setState({ error: 'Please select a valid product freshness.' })
        }
        if (!productDescription.trim()) {
            this.setState({ error: 'Please enter a valid product description.' })
        }
        if (!productPrice || isNaN(productPrice) || parseFloat(productPrice) <= 0) {
            this.setState({ error: 'Please enter a valid product price.' })
        }
    }

    handleLangChange = (value) => {
        this.setState({ lang: value, text: texts.article })
    }

    render() {
        const {
            productName,
            productCat,
            productImage,
            productFreshness,
            productDescription,
            productPrice,
            error,
            lang,
            text,
        } = this.state

        return (
            <>
                <Header changeLang={this.handleLangChange} currentLang={lang} />
                <div className="container my-5 w-50">
                    <div className="text-center">
                        <img src={bootstrapLogo} alt="" />
                        <h2>{text.title[lang]}</h2>
                        <p>
                            {text.description[lang]}
                        </p>
                    </div>
                    <form
                        className="needs-validation w-75 mx-auto px-3"
                        id="form"
                        noValidate=""
                        onSubmit={this.handleSubmit}
                    >
                        <h4>Detail Product</h4>
                        <div className="mb-4 has-validation">
                            <label htmlFor="product-name" className="form-label">
                                Product name
                            </label>
                            <div className="d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control w-75 me-2"
                                    id="product-name"
                                    name="product-name"
                                    required=""
                                    onChange={this.handleProductNameChange}
                                    value={productName}
                                />
                                {error && <BiErrorCircle style={{ color: "red" }} />}
                            </div>
                            {error && <div className="text-danger mt-1">{error}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="form-label">
                                Product Category
                            </label>
                            <div className="d-flex align-items-center">
                                <select
                                    className="form-select w-50 me-2"
                                    aria-label="Default select example"
                                    id="product-cat"
                                    name="product-cat"
                                >
                                    <option selected="">Choose...</option>
                                    <option value={1}>One</option>
                                    <option value={2}>Two</option>
                                    <option value={3}>Three</option>
                                </select>
                                {error && <BiErrorCircle style={{ color: "red" }} />}
                            </div>
                            {error && <div className="text-danger mt-1">{error}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="" className="form-label">
                                Image of Product
                            </label>
                            <div className="input-group custom-file-button w-50">
                                <label className="input-group-text" htmlFor="inputGroupFile">
                                    Choose File
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image-product"
                                    name="image-product"
                                />
                                {error && <BiErrorCircle style={{ color: "red", marginLeft: "10px", marginTop: "10px" }} />}
                                {error && <div className="text-danger mt-1">{error}</div>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleFormControlInput4" className="form-label">
                                Product Freshness
                            </label>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="product-freshness"
                                    defaultValue="brand"
                                    id="brand"
                                />
                                <label className="form-check-label" htmlFor="brand">
                                    Brand New
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="product-freshness"
                                    defaultValue="second"
                                    id="second"
                                />
                                <label className="form-check-label" htmlFor="second">
                                    Second Hank
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="product-freshness"
                                    defaultValue="refurbished"
                                    id="refurbished"
                                />
                                <label className="form-check-label" htmlFor="Refurbished">
                                    Refurbished
                                </label>
                            </div>
                            <span className="invalid-freshness valid" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">
                                Additional Description
                            </label>
                            <div className="d-flex align-items-center">
                                <textarea
                                    className="form-control me-2"
                                    id="description"
                                    name="description"
                                    rows={5}
                                    defaultValue={""}
                                />
                                {error && <BiErrorCircle style={{ color: "red" }} />}
                            </div>
                            {error && <div className="text-danger mt-1">{error}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="product-price" className="form-label">
                                Product Price
                            </label>
                            <div className="d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control me-2"
                                    id="product-price"
                                    name="product-price"
                                    placeholder="$ 1"
                                />
                                {error && <BiErrorCircle style={{ color: "red" }} />}
                            </div>
                            {error && <div className="text-danger mt-1">{error}</div>}
                        </div>
                        <br />
                        <div className="row px-4">
                            <div className="col">
                                <button className="btn btn-primary w-100" type="submit">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="container">
                    <div className="text-center">
                        <h1>List Product</h1>
                    </div>
                    <Table />
                </div>
            </>
        )
    }
}

export default CreateProduct