import { BrowserRouter } from "react-router-dom";
import "./App.css";
import useUsers from "./hooks/UseUsers";

function App() {
  const { user } = useUsers();
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar user={user} />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
