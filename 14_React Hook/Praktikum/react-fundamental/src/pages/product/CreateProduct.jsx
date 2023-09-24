import React, { Component, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useAlert } from "react-alert"

import '@/styles/style.css'
import bootstrapLogo from '@/assets/bootstrap-logo.svg'
import Header from '@/components/header'
import Table from '@/components/table'
import texts from '@/utils/constants/locale.json'
import WelcomeAlert from "@/components/welcomeAlert"
import Product from "./product-script"

const CreateProduct = () => {
    const alert = useAlert()

    const [productName, setProductName] = useState('')
    const [productCat, setProductCat] = useState('')
    const [productFreshness, setProductFreshness] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [products, setProducts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const productId = uuidv4()
        const newProduct = {
            id: productId,
            name: productName,
            category: productCat,
            freshness: productFreshness,
            price: productPrice,
        }
        if (!productName || !productCat || !productFreshness || !productPrice) {
            alert.error('Mohon isi semua data product!')
        } else {
            setProducts([...products, newProduct]);
            alert.success('Selamat produk berhasil ditambahkan!')
        }
        setProductName('')
        setProductCat('')
        setProductFreshness('')
        setProductPrice('')

    }

    const handleDelete = (productId) => {
        const userConfirmed = window.confirm('Apakah anda yakin ingin menghapus data ini?');
        if (userConfirmed) {
            const newProducts = products.filter((product) => product.id !== productId)
            setProducts(newProducts)
            alert.success('Selamat produk berhasil dihapus!')
        }

    }

    return (
        <>
            <WelcomeAlert />
            <Header />
            <div className="container my-5 w-50">
                <div className="text-center">
                    <img src={bootstrapLogo} alt="" />
                    <h2>{texts.article.title.en}</h2>
                    <p>
                        {texts.article.description.en}
                    </p>
                </div>
                <form
                    className="needs-validation w-75 mx-auto px-3"
                    id="form"
                    noValidate=""
                    onSubmit={handleSubmit}
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
                                onChange={(e) => setProductName(e.target.value)}
                                value={productName}
                            />
                        </div>
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
                                value={productCat}
                                onChange={(e) => setProductCat(e.target.value)}
                            >
                                <option >Choose...</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                            </select>
                        </div>
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
                                checked={productFreshness === 'brand'}
                                onChange={(e) => setProductFreshness(e.target.value)}
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
                                checked={productFreshness === 'second'}
                                onChange={(e) => setProductFreshness(e.target.value)}
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
                                checked={productFreshness === 'refurbished'}
                                onChange={(e) => setProductFreshness(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="Refurbished">
                                Refurbished
                            </label>
                        </div>
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
                        </div>
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
                                onChange={(e) => setProductPrice(e.target.value)}
                                value={productPrice}
                            />
                        </div>
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
                <Table products={products} handleDelete={handleDelete} />
            </div>
        </>
    )
}


export default CreateProduct