import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const LoginRoute = (props) => {
  console.log(Cookies.get("token"));
  if (Cookies.get("token") === undefined) {
    return <Navigate to="/dashboard/login" />;
  } else if (Cookies.get("token") !== undefined) {
    return props.children;
  }
};

LoginRoute.propTypes = {
  children: PropTypes.node,
};

export default LoginRoute;
