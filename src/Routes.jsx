// import { RouteObject } from "react-router-dom";
// import Nav from "./Components/Nav/Nav";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import Login from "./Pages/Login/Login";
import Menu from "./Pages/Menu/Menu";
import Restaurant from "./Pages/Restaurant/Restaurant";
import RestaurantForm from "./Pages/RestaurantForm/RestaurantForm";
import NotFound from "./Pages/NotFound/NotFound";
import Nav from "./FoodApp";

export const routes = [
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/home", element: <Home /> },
      { path: "/item", element: <Item /> },
      { path: "/login", element: <Login /> },
      { path: "/menu", element: <Menu /> },
      { path: "/restaurant", element: <Restaurant /> },
      { path: "/restaurantform", element: <RestaurantForm /> },
      { path: "*", element: <NotFound /> },
    ],

    errorElement: <NotFound />,
  },
];
