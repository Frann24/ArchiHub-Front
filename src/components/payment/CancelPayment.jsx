import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import CardSectionStyles from "./CardSectionStyles.css";
//import "bootswatch/dist/lux/bootstrap.min.css";
import { PAYMENT } from "../../redux/slices/constants";
const axios = require("axios");

const stripePromise = loadStripe(
  "pk_test_51LoIVcAfxOW2aSoAIaQduZj78BZ0WSIkqQ6HtJ7eLxdgVvUgP1VQzKUvKp4Cxvqb1IGxfwGdDckLpNODYg6BJ51k00iHLR6VrB"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  //const [userId, setUserId ] = useState("")
  const navigate = useNavigate();

  

  const handleCancelSubscription = async (e) => {
    e.preventDefault();
    //console.log(token.userName)

        
      try {
        const res = await axios.post('http://localhost:3001/api/cancelPayment', {
          userId: token.userId,          
        });
        console.log(res.data)
        const { cancel_at_period_end } = res.data;
        

        
      } catch (error) {
        console.log('Hubo un error, no se pudo procesar su solicitud')
        //navigate("/errorPayment");
      }
      //setLoading(false)
    }
    return (
      <div>
          <form onSubmit={handleCancelSubscription}>
          
            
            <button >Suscription</button>
            </form>
            </div>
    )
  };



function CancelSubscription() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <div class="container-pago">
          <div>
            <div>
              <CheckoutForm />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default CancelSubscription;