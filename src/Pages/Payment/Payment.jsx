import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../CheckOutForm/CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div className='mt-36 w-[40vw] mx-auto border border-yellow-500 p-8 shadow-lg'>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>

                </Elements>
            </div>
            
        </div>
    );
};

export default Payment;