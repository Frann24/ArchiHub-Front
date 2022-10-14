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

  //console.log(token.userId)

  // const handleSubmit = async (e) =>{
  //   e.preventDefault();

  //   const { error, paymentMethod } = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardElement)
  //   });
  //   setLoading(true)

  //   if(!error) {
  //     const { id } = paymentMethod;
  //    try {
  //      const {data} = await axios.post(PAYMENT, {
  //       id,
  //       amount: 1000
  //      })
  //      console.log(data)
  //      elements.getElement(CardElement).clear()
  //    } catch (error) {
  //       console.log(error)
  //    }
  //    setLoading(false)
  //   }
  // }

  const handleSubmitSubscription = async (e) => {
    e.preventDefault();
    //console.log(token.userName)
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
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
  };

  return (
    <div className="contenedor-principal">
      <div>
        <h5>Membership For Month u$s10</h5>
      </div>
      <div>
        <span>{token.userMail}</span>
      </div>
      <form onSubmit={handleSubmitSubscription}>
        <div></div>
        <div className="contenedor-datos">
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
      <div className="contenedor-ofertas-general">

      <div className="contenedor-premium-free" >
        <div>
          Why be Premium?
        </div>
        <div className="cont-oferta">
          <div className="cajaL">
            <p>Publication:</p>
          </div>
          <div className="cajaD">
            <p>Unlimit</p>
          </div>
          <div className="cajaL">
            <p>Number of Projects:</p>
          </div>          
          <div className="cajaD">
            <p>Unlimit</p>
          </div>
          <div className="cajaL">
            <p>Project Privacy:</p> 
          </div>
          <div className="cajaD">
            <p>Public and Private</p>          
          </div>  
        </div>
      </div>
      <div className="contenedor-premium-free">
      <div>
          Free
        </div>
        <div className="cont-oferta">
          <div className="cajaL">
            Publication:
          </div>
          <div className="cajaD">
            None
          </div>
          <div className="cajaL">
            Number of Projects:
          </div>          
          <div className="cajaD">
            3
          </div>
          <div className="cajaL">
            Project Privacy: 
          </div>
          <div className="cajaD">
            Public          
          </div>  
        </div>        
      </div>
      </div>
    </div>
  );
};

function Payment() {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <div class="container-pago">
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
