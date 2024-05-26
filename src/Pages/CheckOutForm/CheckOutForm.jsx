import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { AuthContext } from "../../Context/AuthProvider";
import useTanstack from "../../CustomHooks/useTanstack";

const CheckOutForm = () => {
    const [error,setError] = useState();
    const [clientSecret,setClientSecret] = useState()
    const{payAmount} = useContext(AuthContext);
    console.log(payAmount)
    const axiosPublic = useAxiosPublic();
 const [userInfo]  = useTanstack();
 const {email,coins} = userInfo;
  const stripe = useStripe();
  const elements = useElements();
//-----fetch payment intent-----
useEffect( ()=>{
axiosPublic.post('/create-payment',{
   amount:parseInt(payAmount),
  buyerEmail:email,
   currentCoins:coins
})
.then(res =>{
    // console.log(res.data.clientSecret)
    setClientSecret(res.data.clientSecret)
})
},[axiosPublic])


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
      <button className="btn text-end mt-6 bg-yellow-500 px-8 font-mono font-semibold text-xl" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  );
};

export default CheckOutForm;
