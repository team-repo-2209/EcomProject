import { useState } from "react";
import { loginUser } from "../api/users";
import { useNavigate, useParams } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import Button from "react-bootstrap/Button";
import styles from "../styles/Login.module.css";

export default function Login() {
  const { userFunction } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setLoggedIn } = useUsers();
  return (
    <div className={styles.background}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setError("");

          let result;

          result = await loginUser(username, password);

          console.log(result);
          if (result) {
            setPassword("");
            setUsername("");
            setLoggedIn(true);
            // fetch Your Cart
            navigate("/");
          } else {
            setError("Login");
          }
        }}
      >
        {error && <h4>{error}</h4>}
        <div className={styles.log}>
          <h2>Please Login</h2>
          <h4>Username:</h4>
          <input
            className={styles.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <h4>Password:</h4>
          <input
            className={styles.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <div>
            <Button variant="dark" type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

// import { useState } from "react";
// import { loginUser } from "../api/users";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState();

//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Login</h1>
//       <form
//         onSubmit={async (event) => {
//           event.preventDefault();
//           const result = await loginUser(username, password);
//           console.log(result);
//           if (result) {
//             setError(result.message);
//           } else {
//             console.log("hello");
//           }
//           navigate("/");
//         }}
//       >
//         <input
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           placeholder="Username"
//         />

//         <input
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           placeholder="Password"
//         />
//         {error && <h4>{error}</h4>}
//         <button
//           onClick={() => {
//             console.log({ username });
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
