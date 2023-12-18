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
import Signup from "./Pages/Login/Signup/Signup";

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
			{ path: "/signup", element: <Signup />},
      { path: "*", element: <NotFound /> },
    ],
		Signup: <Signup />,
    errorElement: <NotFound />,
  },
];
