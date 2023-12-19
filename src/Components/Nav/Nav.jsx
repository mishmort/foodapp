import "./nav.css";
import { NavLink } from "react-router-dom";
import easyeats from "../../assets/EE.svg";

export const Nav = () => {
  return (
    <div className="nav">
      <img className="easyeats" src={easyeats} alt="Easy Eats fork logo" />

      <div className="title">
        asy
        <br />
        eats
      </div>
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
