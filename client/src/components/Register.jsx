import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMe } from "../api/users";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const result = await fetchMe(
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
            console.log("Error when registering this user");
          } else {
            console.log("This works!");
          }
        }}
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />

        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Enter a Username"
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter a password"
        />

        <input
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
          placeholder="Enter your first name"
        />

        <input
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
          placeholder="Enter your last name"
        />

        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Enter your phone number"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
