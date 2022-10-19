import { Link } from "react-router-dom";

const Successful = () => {
  return (
    <div>
      <div>
        Congratulations! You are a Premium member. You can publish, you can
        create unlimited projects and you can have projects in private mode.
      </div>
      <div>
        <Link to="/home">
            Home
        </Link>
      </div>
    </div>
  );
};

export default Successful;
