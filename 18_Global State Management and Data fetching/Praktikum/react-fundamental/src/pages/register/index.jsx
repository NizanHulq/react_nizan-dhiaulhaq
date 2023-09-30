import React from 'react';
import RegistrationForm from './RegistrationForm';
import Header from '@/components/header';

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