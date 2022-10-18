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
  
  const navigate = useNavigate();

  

  const handleSubmitSubscription = async (e) => {
    e.preventDefault();
    //console.log(token.userName)
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
      billing_details: {
        email: token.userMail,
        },
    });
    //setLoading(true)
    //console.log(result.paymentMethod.billing_details.email);
    //pm_1LsJmlAfxOW2aSoALMIBcJ5f

    if (result.error) {
      //console.log(result.error.message);
    } else {
      try {
        const res = await axios.post(PAYMENT, {
          payment_method: result.paymentMethod.id,
          email: token.userMail,
          userId: token.userId,
        });
        console.log(res.data)
        const { client_secret, status } = res.data;

        if (status === "requires_action") {
          stripe.confirmCardPayment(client_secret).then(function (result) {
            if (result.error) {
              //console.log("There was an issue");
              //console.log(result.error);
              navigate("/errorPayment");
            } else {
              console.log("You got the money")
              navigate("/successful")
            }
          });
        } else {
          //console.log("You got the money")
          elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement).clear();
          navigate("/successful");
        }
      } catch (error) {
        //console.log('Error Credit Card')
        navigate("/errorPayment");
      }
      //setLoading(false)
    }
  };

  return (
    
        <div className="container mx-auto">
      <div className="container mx-auto grid justify-items-center">
        <h1>Choose the right plan for you:</h1>
      </div>    
     
         <div className="container max-width: 640px grid justify-items-center ">   
        <div className="container bg-gray-100 max-width: 640px 
                        grid grid-cols-3
                        justify-items-center
                        h-64 w-2/3">
          <div className="w-40 justify-content-center">
            1
          </div>
          <div className="w-40 text-center">
            Free
          </div>
          <div className="w-40 text-center">
            Premium
          </div>          
          <div className="w-40 text-center">
            Publication
          </div>
          <div className="w-40 text-center">
            X 
          </div>
          <div className="w-40 text-center">
            tilde          
          </div>
          <div className="w-40 text-center">
            Number of Projects
          </div>
          <div className="w-40 text-center">
            3
          </div>
          <div className="w-40 text-center">
            Unlimited
          </div>          
          <div className="w-40 text-center">
            Project Privacy
          </div>
          <div className="w-40 text-center">
            Public only 
          </div>
          <div className="w-40 text-center">
            Public/Private          
          </div>    
        </div> 
        </div>       
      
      

      <div className="container mx-auto">
      <form onSubmit={handleSubmitSubscription}>
        <div className="container mx-auto justify-items-center max-width: 640px h-64 w-2/5">
          {/* <CardElement /> */}
          <div className="card-number">
            <CardNumberElement />
            <div>
              <p>Card Number</p>
            </div>
          </div>
          <div className="card-expire">
            <CardExpiryElement />
            <div>
              <p>Expires</p>
            </div>
          </div>
          <div className="card-cvc">
            <CardCvcElement />
            <div>
              <p>Code Security</p>
            </div>
          </div>
          <button disabled={!stripe}>Suscription</button>
        </div>
      </form>
      </div>
      </div>
    
  );
};

function Payment() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <div>
          <div>
            <div>
              <CheckoutForm className={CardSectionStyles} />
            </div>
          </div>
        </div>
      </Elements>
    </div>
  );
}

export default Payment;
