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
        const res = await axios.post(PAYMENT, {
          email: token.userMail,          
        });
        //console.log(res.data)
        const { client_secret, status } = res.data;

        if (status === "requires_action") {
          stripe.confirmCardPayment(client_secret).then(function (result) {
            if (result.error) {
              //console.log("There was an issue");
              //console.log(result.error);
              navigate("/errorPayment");
            } else {
              //console.log("123You got the money")
            }
          });
        } else {
          //console.log("You got the money")
          elements.getElement(CardElement).clear();
          navigate("/successful");
        }
      } catch (error) {
        //console.log('Error Credit Card')
        navigate("/errorPayment");
      }
      //setLoading(false)
    }
    return (
      <div className="contenedor-principal">
        <div>
          <h5>Membership For Month u$s10</h5>
        </div>
        <div>
          <span>{token.userMail}</span>
        </div>
        <form onSubmit={handleCancelSubscription}>
          
          <div className="contenedor-datos">
            
            <button disabled={!stripe}>Suscription</button>
          </div>
        </form>
        </div>
    );
  };



function CancelSubscription() {
  return (
    <div>
      Cancel Subscription
    </div>
  );
}

export default CancelSubscription;