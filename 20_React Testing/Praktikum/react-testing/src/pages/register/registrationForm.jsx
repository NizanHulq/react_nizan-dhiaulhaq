import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Nama depan harus memiliki minimal 3 karakter')
                .required('Nama depan wajib diisi'),
            lastName: Yup.string()
                .min(3, 'Nama belakang harus memiliki minimal 3 karakter')
                .required('Nama belakang wajib diisi'),
            username: Yup.string().required('Username wajib diisi'),
            email: Yup.string()
                .email('Email tidak valid')
                .required('Email wajib diisi'),
            password: Yup.string()
                .min(8, 'Password harus memiliki minimal 8 karakter')
                .required('Password wajib diisi'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Password harus cocok')
                .required('Konfirmasi password wajib diisi'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form class="container mt-5" onSubmit={formik.handleSubmit}>
            <div class="mb-3">
                <label for="firstName" class="form-label">Nama Depan</label>
                <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    name="firstName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div class="text-danger">{formik.errors.firstName}</div>
                ) : null}
            </div>

            <div class="mb-3">
                <label for="lastName" class="form-label">Nama Belakang</label>
                <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div class="text-danger">{formik.errors.lastName}</div>
                ) : null}
            </div>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div class="text-danger">{formik.errors.username}</div>
                ) : null}
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div class="text-danger">{formik.errors.email}</div>
                ) : null}
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div class="text-danger">{formik.errors.password}</div>
                ) : null}
            </div>

            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Konfirmasi Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div class="text-danger">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <button type="submit" class="btn btn-primary">Daftar</button>
        </form>
    );
};

export default RegistrationForm;
