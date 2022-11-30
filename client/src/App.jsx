import "./App.css";
import useUsers from "./hooks/UseUsers";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const { user } = useUsers();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
      </BrowserRouter>
    </div>
  );
}

export default App;
