import React from 'react';
import Header from '@/components/header';
import RegistrationForm from './registrationForm';

const RegistrationPage = () => {
    return (
        <div>
            <Header />
            <h1 className='text-center'>Formulir Registrasi </h1>
            <RegistrationForm />
        </div>
    );
};

export default RegistrationPage;