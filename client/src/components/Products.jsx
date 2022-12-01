import { fetchProducts } from "../api/products";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Products.module.css";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      const info = await fetchProducts();
      setProducts(info.allProducts);
    }
    getProducts();
  }, []);

  function ProductMatches(product, text) {
    return product.name.toLowerCase().includes(text);
  }

  const filteredProducts = products.filter((product) =>
    ProductMatches(product, searchTerm)
  );
  const productsToDisplay = searchTerm.length ? filteredProducts : products;
  console.log(products);
  return (
    <div className={styles.Products}>
      <input
        className={styles.search}
        type="text"
        value={searchTerm}
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.head}>
        <h1>
          <b>Products</b>
        </h1>
      </div>
      {productsToDisplay.map((product) => {
        return (
          <div key={product.id}>
            {product.imageUrl}
            <h3>{product.productName}</h3>
            <h6>$ {product.price}</h6>
            <button
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
