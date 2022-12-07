// in this cart provider, you need to fetch from /me/cart and pass the cart and setCart into your provider component
import { useState, useEffect } from "react";
import { fetchMyCart } from "../api/users";
import CartContext from "../context/cartContext";
import useUsers from "../hooks/useUsers";

export default function CartProvider({ children }) {
  const { user, loggedIn } = useUsers();
  const [cart, setCart] = useState({});
  console.log("USER IS CURRENTLY: ", user);
  useEffect(() => {
    async function getCart() {
      if (user.user !== "Guest") {
        const cart = await fetchMyCart();
        console.log(cart);
        setCart(cart);
      }
    }
    getCart();
  }, [loggedIn]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
