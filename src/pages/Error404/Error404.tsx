import { Link } from "react-router-dom";
import { Error404_Backgroud1, Error404_Backgroud2 } from "../../assets";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="Error404Page">
      <img
        src={Error404_Backgroud1}
        alt="Error404_Backgroud1"
        className="Error404_Backgroud1"
      />
      <img
        src={Error404_Backgroud2}
        alt="Error404_Backgroud2"
        className="Error404_Backgroud2"
      />
      <h1 className="Error404_title">Error 404</h1>
      <p className="Error404_p">Page not found </p>
      <Link to="/" className="Error404_button">
        Go to main page
      </Link>
    </div>
  );
};

export default Error404;
