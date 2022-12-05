import useCart from "../hooks/useCart";

const CartProduct = ({ product }) => {
  const { removeProduct } = useCart();

  return (
    <div>
      <h5>{product.name}</h5>
      <button onClick={() => removeProduct(product)}>Remove from cart</button>
    </div>
  );
};

export default CartProduct;
