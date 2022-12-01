import { fetchProducts } from "../api/products";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const info = await fetchProducts();
      console.log("this is info", info);
      setProducts(info);
    }
    getProducts();
  }, []);

  return (
    <div className={styles.Products}>
      {products?.map((product) => {
        return (
          <div className={styles.box} key={product.id}>
            <img className={styles.img} src={product.imageUrl} />
            <h6>{product.productName}</h6>
            <h6>${product.price}</h6>

            <button
              className={styles.button}
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
