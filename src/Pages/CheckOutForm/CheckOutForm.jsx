import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../CustomHooks/useAxiosPublic";
import { AuthContext } from "../../Context/AuthProvider";
import useTanstack from "../../CustomHooks/useTanstack";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState();
  const [transactionId, setTransactionId] = useState();
  const { payAmount, user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const [userInfo] = useTanstack();
  const { email, coins } = userInfo;
  const stripe = useStripe();
  const elements = useElements();
  //-----fetch payment intent-----
  useEffect(() => {
    axiosPublic
      .post("/create-payment", {
        amounts: parseInt(payAmount),
        buyerEmail: email,
        currentCoins: coins,
      })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("inside");
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("Payment error", error);
    } else {
      setError("");
      console.log(paymentMethod, "payment method");
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName || "annonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log(paymentIntent, "payment intents");
      if (paymentIntent.status === "succeeded") {
        console.log("id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        axiosPublic
          .post("/update-coins", {
            buyer: userInfo?.email,
            coinsInfo: parseInt(payAmount * 100),
          })
          .then((res) => {
            console.log(res.data);
            navigate("/allRecipe");
          });
      }
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
      <button
        className="btn text-end mt-6 bg-yellow-500 px-8 font-mono font-semibold text-xl"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
      {transactionId && (
        <p className="text-green-500">
          Your Transaction ID is : {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
