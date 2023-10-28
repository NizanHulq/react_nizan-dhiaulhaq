import { useState } from "react"

const ContactUs = () => {
    const [inputVal, setInputVal] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputVal((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const submitForm = (e) => {
        e.preventDefault();
        alert(`Data yang dikirimkan adalah: \n first name: ${inputVal.firstName} \n last name: ${inputVal.lastName} \n email: ${inputVal.email} \n message: ${inputVal.message}`);
    }

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form id="contactForm" onSubmit={submitForm}>
                            <div className="row">
                                <div className="mb-3 col-6">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        name="firstName"
                                        required=""
                                        value={inputVal.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3 col-6">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        name="lastName"
                                        required=""
                                        value={inputVal.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    required=""
                                    value={inputVal.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required=""
                                    value={inputVal.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs