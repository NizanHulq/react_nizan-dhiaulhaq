import React, { useState } from 'react';

const FormLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            const isValidEmail = validateEmail(value);
            setErrors({
                ...errors,
                email: isValidEmail ? '' : 'Email tidak valid',
            });
        }

        if (name === 'password') {
            const isValidPassword = value.length >= 8;
            setErrors({
                ...errors,
                password: isValidPassword ? '' : 'Password harus memiliki minimal 8 karakter',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValidForm = Object.values(errors).every((error) => error === '')

        if (isValidForm) {
            console.log('Data login:', formData)
        } else {
            console.log('Formulir tidak valid')
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Form Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                onChange={handleInputChange}
                                value={formData.email}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                onChange={handleInputChange}
                                value={formData.password}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormLogin
