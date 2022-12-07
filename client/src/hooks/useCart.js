import { useCallback, useContext } from "react";
import CartContext from "../context/cartContext";
import { removeItemFromCart, addToCart } from "../api/order_products";
import { fetchMyCart } from "../api/users";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addProduct = useCallback(
    async (product) => {
      console.log("cart:", cart, "product:", product);
      const result = await addToCart(cart.id, product.id);
      if (result.name === "error") {
        console.log("Already in Your Cart!");
      } else {
        const updatedCart = await fetchMyCart();
        setCart(updatedCart);
      }
    },
    [cart, setCart]
  );

  const removeProduct = useCallback(
    async (newProduct) => {
      await removeItemFromCart(newProduct.id);
      const updatedCart = await fetchMyCart();
      console.log("Updated Cart: ", updatedCart);
      setCart(updatedCart);
    },
    [cart, setCart]
  );

  return {
    cart,
    setCart,
    addProduct,
    removeProduct,
  };
};

export default useCart;
