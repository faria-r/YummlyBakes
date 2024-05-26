import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOutForm = () => {
    const [error,setError] = useState();
    const{payAmount} = useContext(AuthContext);
    // console.log(typeof(payAmount))
    const axiosPublic = useAxiosPublic();
  const stripe = useStripe();
  const elements = useElements();
//-----fetch payment intent-----
useEffect(()=>{
axiosPublic.post('/create-payment')
},[])


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('inside')
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if(card == null){
        return;
    }
    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
        setError(error.message)
        console.log('Payment error',error)
    }
    else{
        setError('')
        console.log(paymentMethod,'payment method')
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />{" "}
      <button className="btn text-end mt-6 bg-yellow-500 px-8 font-mono font-semibold text-xl" type="submit" disabled={!stripe}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckOutForm;
