import PropTypes from "prop-types";
import NavbarDashboard from "./NavbarDashboard";
import Footer from "./Footer";

const LayoutDashboard = (props) => {
  return (
    <div>
      <NavbarDashboard />
      {props.children}
      <Footer />
    </div>
  );
};

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default LayoutDashboard;
