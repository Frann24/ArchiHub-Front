import { Link } from "react-router-dom";

const CancelPaymentOk = () => {
  return (
    <div>
      <div>
        <div>
          The subscription has been cancelled. You will continue to enjoy the
          benefits of a Free client. Remember that you can go back to being
          Premium whenever you want.
        </div>
        <Link to="/home">Home</Link>
      </div>      
    </div>
  );
};

export default CancelPaymentOk;
