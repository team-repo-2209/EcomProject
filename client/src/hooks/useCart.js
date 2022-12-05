import { useCallback, useContext } from "react";
import CartContext from "../context/cartContext";
import { removeItemFromCart, addToCart } from "../api/order_products";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const addProduct = useCallback(
    async (product) => {
      console.log("cart:", cart, "product:", product);
      const result = await addToCart(cart.id, product.id);
      if (result.name === "error") {
        console.log("Already in Your Cart!");
      } else {
        const newProduct = [...cart.products, product];
        setCart({ ...cart, products: newProduct });
      }
    },
    [cart, setCart]
  );

  const removeProduct = useCallback(
    async (newProduct) => {
      await removeItemFromCart(cart.id, newProduct.id);
      const filteredProducts = cart.products.filter((product) => {
        return product.id !== newProduct.id;
      });
      setCart({ ...cart, products: filteredProducts });
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
