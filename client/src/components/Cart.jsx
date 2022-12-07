import styles from "../styles/Cart.module.css";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import eth from "../styles/eth.png";

export default function Cart() {
  const navigate = useNavigate();
  const { removeProduct, cart } = useCart();

  console.log("Cart: ", cart);

  function calculateTotal(cartObj) {
    let total = 0;
    let products = cartObj.order_products;
    console.log("products", cart.order_products);
    for (let i = 0; i < products?.length; i++) {
      total += products[i].products.price;
    }
    console.log("total", total);
    return total;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart?.order_products?.map((op) => {
        return (
          <div>
            <img
              className={styles.img}
              src={op.products.imageUrl}
              height={90}
              width={90}
            />
            <h6>{op.products.productName}</h6>
            <h6>
              <img src={eth} height={15} width={15} alt="Eth" />
              .0
              {op.products.price}
            </h6>
            <button onClick={async () => await removeProduct(op)}>
              Remove from Cart
            </button>
          </div>
        );
      })}

      <div>
        <h3>
          Total:
          <img src={eth} height={25} width={25} alt="Eth" />
          {calculateTotal(cart)}.00
        </h3>
        <button onClick={() => navigate("/Checkout")}>Checkout</button>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
}
