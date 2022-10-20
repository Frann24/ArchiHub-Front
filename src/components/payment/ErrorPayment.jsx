import { Link } from "react-router-dom";

const ErrorPayment = () => {
  return (
    <div>
      <div>
        <div>
          The requested operation could not be performed. Try again. If the
          problem persists, contact your credit card operator.
        </div>
        <div>
            <Link to="/payment">Payment</Link>
        </div>
        <div>
            <Link to="/home">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPayment;
