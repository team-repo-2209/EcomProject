import "./App.css";
import useUsers from "./hooks/UseUsers";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Register from "./components/Register";

function App() {
  const { user } = useUsers();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
