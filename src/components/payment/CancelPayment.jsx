import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  //useStripe,
  //useElements
} from "@stripe/react-stripe-js";
import { CANCEL_PAYMENT } from "../../redux/slices/constants";


//import "bootswatch/dist/lux/bootstrap.min.css";

const axios = require("axios");

const stripePromise = loadStripe(
  "pk_test_51LoIVcAfxOW2aSoAIaQduZj78BZ0WSIkqQ6HtJ7eLxdgVvUgP1VQzKUvKp4Cxvqb1IGxfwGdDckLpNODYg6BJ51k00iHLR6VrB"
);

const CheckoutForm = () => {
  // const stripe = useStripe();
  // const elements = useElements();
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem("token"));
  

  

  const handleCancelSubscription = async (e) => {
    e.preventDefault();
            
      try {
        const res = await axios.post(CANCEL_PAYMENT, {
          userId: token.userId,
          emailUser: token.userMail          
        });
        console.log(res.data)
        const { cancel_at_period_end } = res.data;
        
        if(cancel_at_period_end === true){
          console.log("Suscripcion cancelada!!!")
            navigate("/cancelPaymentOk")
        } else {
          console.log("Error Suscripcion!!!")
          navigate("/cancelPaymentError")
        }

        
      } catch (error) {
        console.log('Hubo un error, no se pudo procesar su solicitud')
        
      }
      //setLoading(false)
    }
    return (
      <div>
          <form onSubmit={handleCancelSubscription}>
          
            
            <button >Cancel Suscription</button>
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