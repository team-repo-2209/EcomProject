import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/users";
import styles from "../styles/Register.module.css";
import Button from "react-bootstrap/Button";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const result = await registerUser(
            email,
            username,
            password,
            firstname,
            lastname,
            phoneNumber
          );
          console.log("register", result);
          if (result) {
            setEmail("");
            setUsername("");
            setPassword("");
            setFirstname("");
            setLastname("");
            setPhoneNumber("");
            navigate("/");
            console.log("Error when registering this user");
          } else {
            console.log("This works!");
          }
        }}
      >
        <div className={styles.log}>
          <h2>Register</h2>
          <h6>Email:</h6>
          <input
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
          />
          <h6>Username:</h6>
          <input
            className={styles.input}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter a username"
          />
          <h6>Password (must be 8 character or longer):</h6>
          <input
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter a password"
            type="password"
          />
          <h6>First Name:</h6>
          <input
            className={styles.input}
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            placeholder="Enter your first name"
          />
          <h6>Last Name:</h6>
          <input
            className={styles.input}
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Enter your last name"
          />
          <h6>Phone Number:</h6>
          <input
            className={styles.input}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            placeholder="Enter your phone number"
          />
          <div>
            <Button type="submit">Register</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
