import React, { useEffect, useState } from 'react';

const FormLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'));
    })

    // const validateEmail = (email) => {
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return regex.test(email);
    // };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // if (name === 'username') {
        //     const isValidUsername = validateUsername(value);
        //     setErrors({
        //         ...errors,
        //         username: isValidEmail ? '' : 'Email tidak valid',
        //     });
        // }

        if (name === 'password') {
            const isValidPassword = value.length >= 8;
            setErrors({
                ...errors,
                password: isValidPassword ? '' : 'Password harus memiliki minimal 8 karakter',
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = formData;

        const isValidForm = Object.values(errors).every((error) => error === '')

        const dummyUser = { username: 'admin', password: 'password123' };
        const user = JSON.parse(localStorage.getItem('user'));

        if (isValidForm) {
            if (user && user.username === username && user.password === password) {
                localStorage.setItem('isLoggedIn', true);
                setIsLoggedIn(true);
                // window.location.reload();
            } else if (username === dummyUser.username && password === dummyUser.password) {
                localStorage.setItem('user', JSON.stringify(dummyUser));
                localStorage.setItem('isLoggedIn', true);
                setIsLoggedIn(localStorage.getItem('isLoggedIn'));
                // window.location.reload();
            } else {
                alert('Invalid username or password');
            }
            console.log('Data login:', formData)
        } else {
            console.log('Formulir tidak valid')
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {isLoggedIn ? (
                        <div>
                            <p>Selamat datang, {formData.username}!</p>
                            <a className='btn btn-primary' href="/">Homepage</a>
                        </div>
                    ) : (<div className="col-md-6">
                        <h2>Form Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    onChange={handleInputChange}
                                    value={formData.username}
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
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
                    </div>)}
                </div>
            </div>
        </>

    )
}

export default FormLogin
