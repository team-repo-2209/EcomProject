import styles from "../styles/Cart.module.css";
import useCart from "../hooks/useCart";
import { useNavigate, useParams } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Cart</h2>
        {cart.products.map((product, i) => (
          <CartProduct key={`i${i}`} product={product} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Continue Shopping
      </button>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
