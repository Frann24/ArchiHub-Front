import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js'; 
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
//import "bootswatch/dist/lux/bootstrap.min.css";
import { PAYMENT } from '../../redux/slices/constants';
const axios = require("axios");

const stripePromise = loadStripe("pk_test_51LoIVcAfxOW2aSoAIaQduZj78BZ0WSIkqQ6HtJ7eLxdgVvUgP1VQzKUvKp4Cxvqb1IGxfwGdDckLpNODYg6BJ51k00iHLR6VrB" )

const CheckoutForm = () => {
  
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false)
  const [email, setMail ] = useState('')
  const token = JSON.parse(localStorage.getItem("token"))

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

  const handleSubmitSubscription = async (e) =>{
    e.preventDefault();
    console.log(token.userName)
    if(!stripe || !elements){
      return;
    }
    const email = token.userMail
    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: email,
      }
      
    })

    if(result.error){
      console.log(result.error.message);
    } else {
      const res = await axios.post(PAYMENT, {'payment_method': result.paymentMethod.id, 'email': email})
      console.log(res.data)
      const { client_secret, status } = res.data;
  
      if(status === 'requires_action') {
        stripe.confirmCardPayment(client_secret).then(function(result){
          if(result.error) {
            console.log("There was an issue");
            console.log(result.error);
          } else {
            console.log("You got the money")
          }
        });
      } 
      else {
        console.log("You got the money")
        elements.getElement(CardElement).clear()
      }   
    }
  };

  return (
        <form onSubmit={handleSubmitSubscription} className="card">
          <h5>Membership For Month u$s10</h5>
          {/* <input          
          type="text"
          name="email"
          placeholder="email"
          value= {email}
          onChange={(e) => setMail(e.target.value)}          
        /> */}
        <div>
          {token.userMail}
        </div>
          <div className='form-group'>
            <CardElement className='form-control'/>
          </div>
          <button className='btn btn-success' disabled={!stripe}>
            {loading ? 
              (<div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Suscription"
              )} 
          </button>
        </form>
  )     
}

function Payment() {
  return(
    <div>      
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className='row'>
          <div className='col-md-4 offset-md-4'>
            <CheckoutForm/>
          </div>
        </div>
      </div>
    </Elements>
    </div>
  )
}

export default Payment;