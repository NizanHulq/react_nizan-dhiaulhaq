import React, { Component, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

import '@/styles/style.css'
import bootstrapLogo from '@/assets/bootstrap-logo.svg'
import Header from '@/components/header'
import Table from '@/components/table'
import texts from '@/utils/constants/locale.json'
import WelcomeAlert from "@/components/welcomeAlert"

const validateInput = (input, type) => {
    const regexWords = new RegExp("^[a-zA-Z]+$");
    const regexNumber = new RegExp("^[0-9]+$");

    switch (type) {
        case 'product-name':
            return regexWords.test(input);
        case 'product-cat':
            return input !== '';
        case 'product-freshness':
            return input === 'brand' || input === 'second' || input === 'refurbished';
        case 'product-price':
            return regexNumber.test(input);
        default:
            return true;
    }
};

const validateSvgImage = (file) => {
    if (file) {
        return file.type === 'image/svg+xml';
    }
    return false;
};

const CreateProduct = () => {

    const [productName, setProductName] = useState('')
    const [productCat, setProductCat] = useState('')
    const [productFreshness, setProductFreshness] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [products, setProducts] = useState([])
    const [productImage, setProductImage] = useState(null);

    const [errorMessages, setErrorMessages] = useState({
        productName: '',
        productCat: '',
        productFreshness: '',
        productPrice: '',
        productImage: '',
    });

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setProductImage(imageFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const productId = uuidv4()
        const newProduct = {
            id: productId,
            name: productName,
            category: productCat,
            freshness: productFreshness,
            price: productPrice,
            image: productImage.name
        }

        const isProductNameValid = validateInput(productName, 'product-name');
        const isProductCatValid = validateInput(productCat, 'product-cat');
        const isProductFreshnessValid = validateInput(productFreshness, 'product-freshness');
        const isProductPriceValid = validateInput(productPrice, 'product-price');
        const isProductImageValid = !!productImage && validateSvgImage(productImage);

        setErrorMessages({
            productName: isProductNameValid ? '' : 'Nama produk tidak valid',
            productCat: isProductCatValid ? '' : 'Silakan pilih kategori',
            productFreshness: isProductFreshnessValid ? '' : 'Silakan pilih kesegaran produk',
            productPrice: isProductPriceValid ? '' : 'Harga produk tidak valid',
            productImage: isProductImageValid ? '' : 'Silakan unggah gambar produk dalam format SVG',
        });

        if (isProductNameValid && isProductCatValid && isProductFreshnessValid && isProductPriceValid && isProductImageValid) {
            setProducts([...products, newProduct]);
            localStorage.setItem('products', JSON.stringify([...products, newProduct]));
            // alert.success('Selamat produk berhasil ditambahkan!')
        } else {
            // alert.error('Mohon isi semua data product!')
            return;
        }
        
        setProductName('')
        setProductCat('')
        setProductFreshness('')
        setProductPrice('')
        setProductImage(null);
    }

    const handleDelete = (productId) => {
        const userConfirmed = window.confirm('Apakah anda yakin ingin menghapus data ini?');
        if (userConfirmed) {
            const newProducts = products.filter((product) => product.id !== productId)
            setProducts(newProducts)
            localStorage.setItem('products', JSON.stringify(newProducts));
            // alert.success('Selamat produk berhasil dihapus!')
        }

    }
    console.log(products)
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
                        <div className="text-danger">{errorMessages.productName}</div>
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
                        <div className="text-danger">{errorMessages.productCat}</div>
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
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="text-danger">{errorMessages.productImage}</div>
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
                        <div className="text-danger">{errorMessages.productFreshness}</div>
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
                        <div className="text-danger">{errorMessages.productPrice}</div>
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