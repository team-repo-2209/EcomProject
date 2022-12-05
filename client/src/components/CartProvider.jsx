// in this cart provider, you need to fetch from /me/cart and pass the cart and setCart into your provider component
import { useState, useEffect } from "react";
import { fetchMyCart } from "../api/users";
import CartContext from "../context/cartContext";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(true);

  useEffect(() => {
    async function getCart() {
      const cart = await fetchMyCart();
      console.log(cart);
      setCart(cart);
    }
    getCart();
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
