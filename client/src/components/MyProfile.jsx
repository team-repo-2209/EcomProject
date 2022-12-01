import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUsers from "../hooks/UseUsers";
import { fetchMe, updateUser } from "../api/users";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import WalletCard from "./WalletCard";

export default function MyProfile() {
  const { user } = useUsers();
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    async function getMyProfile() {
      if (user) console.log("Profile: ", user);
      const userProfile = await fetchMe();
      setProfile(userProfile);
    }
    getMyProfile();
  }, [user]);

  return (
    <div>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          window.location.reload();
          const result = await updateUser(
            user.id,
            email,
            password,
            firstname,
            lastname,
            phoneNumber
          );
          console.log("Updated Profile: ", result);
        }}
      >
        <h3>My Profile</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            type="text"
            placeholder={user.username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="text"
            placeholder={user.password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            value={firstname}
            type="text"
            placeholder={user.firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            value={lastname}
            type="text"
            placeholder={user.lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phoneNumber}
            type="text"
            placeholder={user.phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="secondary">Change</Button>
      </Form>
      {/* <WalletCard /> */}
    </div>
  );
}
