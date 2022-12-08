import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { logoutUser } from "../api/users";
import main from "../styles/main.png";
import styles from "../styles/NavBar.module.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import cartshopper from "../styles/cartshopper.png";
import { fetchProducts } from "../api/products";
import useCart from "../hooks/useCart";
import useUsers from "../hooks/useUsers";
import { fetchMe } from "../api/users";

function NavBar() {
  const { user, setUser, setLoggedIn } = useUsers();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const info = await fetchProducts();
      console.log("this is info", info);
      setProducts(info);
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function getMe() {
      const user = await fetchMe();

      if (user.loggedIn === false) {
        setUser({ user: "Guest" });
        setLoggedIn(false);
      } else {
        setUser(user);
        setLoggedIn(true);
      }
    }
    getMe();
  }, []);

  function productMatches(product, text) {
    return product.productName.toLowerCase().includes(text);
  }

  const filteredProducts = products.filter((product) =>
    productMatches(product, searchTerm)
  );
  const productsToDisplay = searchTerm.length ? filteredProducts : products;

  if (user.user === "Guest") {
    return (
      <Navbar className={styles.background}>
        <div className={styles.header}>
          <Link className={styles.img} to="/">
            <img src={main} height={40} width={150} alt="Main" />
          </Link>
        </div>

        <Nav.Item>
          <div className={styles.dropdown}>
            <DropdownButton
              variant="dark"
              id="dropdown-item-button"
              title="Choose Category"
            >
              <Dropdown.Item as="button">
                <Link to="/Category/Anime">Anime</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/Category/Cartoon">Cartoon</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/Category/LiveAction">Live Action</Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Nav.Item>
        {user.user === "Guest" ? (
          <>
            {" "}
            <Nav.Item>
              <Link className={styles.text} to="/user/register">
                Register
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={styles.text} to="/user/login">
                Login
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className={styles.cart} to="/Cart">
                <img src={cartshopper} height={35} width={40} alt="Logo" />
              </Link>
            </Nav.Item>{" "}
          </>
        ) : (
          ""
        )}
      </Navbar>
    );
  }

  return (
    <>
      <Navbar className={styles.background}>
        <div className={styles.header}>
          <Link className={styles.img} to="/">
            <img src={main} height={40} width={150} alt="Main" />
          </Link>
          <Nav.Item className={styles.welcome}>
            Welcome, {user.username}{" "}
          </Nav.Item>
        </div>
        <Nav.Item>
          <div className={styles.dropdown}>
            <DropdownButton
              variant="dark"
              id="dropdown-item-button"
              title="Choose Category"
            >
              <Dropdown.Item as="button">
                <Link to="/Category/Anime">Anime</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/Category/Cartoon">Cartoon</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/Category/LiveAction">Live Action</Link>
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </Nav.Item>
        {user.username !== "admin" ? (
          <Nav.Item>
            <Link className={styles.text} to="/myProfile">
              My Profile
            </Link>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <Link className={styles.text} to="/admin">
              Admin
            </Link>
          </Nav.Item>
        )}
        <Nav.Item>
          <Link
            className={styles.text}
            onClick={async () => {
              await logoutUser();
              setLoggedIn(false);
              navigate("/user/login");
            }}
          >
            Log Out
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={styles.cart} to="/cart">
            <img src={cartshopper} height={35} width={40} alt="Logo" />
          </Link>
        </Nav.Item>{" "}
      </Navbar>
    </>
  );
}

export default NavBar;
