import "./App.css";
import useUsers from "./hooks/UseUsers";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
// import MyProfile from "./components/MyProfile";
import Register from "./components/Register";
import Login from "./components/Login";
import Anime from "./components/Anime";
import Cartoon from "./components/Cartoon";
import LiveAction from "./components/LiveAction";
// import Cart from "./components/Cart";

function App() {
  const { user } = useUsers();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Products />} />

          {/* <Route path="/MyProfile" element={<MyProfile />} /> */}
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/Category/Anime" element={<Anime />} />
          <Route path="/Category/Cartoon" element={<Cartoon />} />
          <Route path="/Category/LiveAction" element={<LiveAction />} />
          {/* <Route path="/Cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
