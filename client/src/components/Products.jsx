import { fetchProducts } from "../api/products";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";
import eth from "../styles/eth.png";
import logo from "../styles/logo.png";
export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      const info = await fetchProducts();

      setProducts(info);
    }
    getProducts();
  }, []);

  function productMatches(product, text) {
    return product.productName.toLowerCase().includes(text);
  }

  const filteredProducts = products.filter((product) =>
    productMatches(product, searchTerm)
  );
  const productsToDisplay = searchTerm.length ? filteredProducts : products;

  return (
    <div>
      <div>
        <img
          className={styles.logo}
          src={logo}
          height={50}
          width={200}
          alt="Logo"
        />
      </div>
      <input
        className={styles.searchbar}
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.Products}>
        {productsToDisplay?.map((product) => {
          return (
            <div className={styles.box} key={product.id}>
              <img className={styles.img} src={product.imageUrl} />
              <h6>{product.productName}</h6>
              <div>
                <h6>
                  <img src={eth} height={15} width={15} alt="Eth" />
                  .0
                  {product.price}
                </h6>
              </div>
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
    </div>
  );
}
