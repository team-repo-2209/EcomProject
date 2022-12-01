import "./App.css";
import useUsers from "./hooks/UseUsers";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
// import MyProfile from "./components/MyProfile";
import Register from "./components/Register";
import Login from "./components/Login";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
