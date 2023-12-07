import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="cart">Cart</NavLink>
      <NavLink to="checkout">Checkout</NavLink>
      <NavLink to="home">Home</NavLink>
      <NavLink to="item">Item</NavLink>
      <NavLink to="login">Login</NavLink>
      <NavLink to="menu">Menu</NavLink>
      <NavLink to="restaurant">Restaurant</NavLink>
      <NavLink to="restaurantform">Restaurant Form</NavLink>
    </div>
  );
};

export default Nav;
