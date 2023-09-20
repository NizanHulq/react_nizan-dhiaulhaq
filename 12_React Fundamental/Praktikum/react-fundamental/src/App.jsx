import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import bootstrapLogo from './assets/bootstrap-logo.svg'
import js from './product-script'

function App() {

  return (
    <>
      <header>
        <nav className="navbar  navbar-expand-lg shadow-sm px-5">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
              Simple header
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse ms-auto"
              id="navbarNavAltMarkup"
              style={{ flexGrow: "unset" }}
            >
              <div className="navbar-nav gap-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a className="nav-link" href="#">
                  FAQs
                </a>
                <a className="nav-link" href="#">
                  About
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="container my-5 w-50">
        <div className="text-center">
          <img src={bootstrapLogo} alt="" />
          <h2>Create Product</h2>
          <p>
            Below is an example form built entirely with Bootstrap’s form controls.
            Each required form group has a validation state that can be triggered by
            attempting to submit the form without completing it.
          </p>
        </div>
        <form
          className="needs-validation w-75 mx-auto px-3"
          id="form"
          noValidate=""
        >
          <h4>Detail Product</h4>
          <div className="mb-4 has-validation">
            <label htmlFor="product-name" className="form-label">
              Product name
            </label>
            <input
              type="text"
              className="form-control w-75"
              id="product-name"
              name="product-name"
              required=""
            />
            <span className="invalid-name valid" />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select
              className="form-select w-50"
              aria-label="Default select example"
              id="product-cat"
              name="product-cat"
            >
              <option selected="">Choose...</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
            <span className="invalid-cat valid" />
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
              <span className="invalid-image valid" />
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
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows={5}
              defaultValue={""}
            />
            <span className="invalid-description valid" />
          </div>
          <div className="mb-4">
            <label htmlFor="product-price" className="form-label">
              Product Price
            </label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              name="product-price"
              placeholder="$ 1"
            />
            <span className="invalid-price valid" />
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
      </div>
    </>
  )
}

export default App
