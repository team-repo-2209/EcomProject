import "./App.css";

import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import MyProfile from "./components/MyProfile";
import MyOrders from "./components/MyOrders";
import Register from "./components/Register";
import Login from "./components/Login";
import Anime from "./components/Anime";
import Cartoon from "./components/Cartoon";
import LiveAction from "./components/LiveAction";
import Cart from "./components/Cart";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />

          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/myProfile/myOrders" element={<MyOrders />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/Category/Anime" element={<Anime />} />
          <Route path="/Category/Cartoon" element={<Cartoon />} />
          <Route path="/Category/LiveAction" element={<LiveAction />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
