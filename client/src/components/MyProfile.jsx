import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { fetchMe, updateUser } from "../api/users";
import WalletCard from "./WalletCard";
import CreateProduct from "./CreateProduct";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "../styles/Profile.module.css";
import { logoutUser } from "../api/users";

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
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    async function getMyProfile() {
      if (user);
      const userProfile = await fetchMe();
      setProfile(userProfile);
      setUsername(userProfile.username);
      setEmail(userProfile.email);
      setFirstname(userProfile.firstname);
      setLastname(userProfile.lastname);
      setPhoneNumber(userProfile.phoneNumber);
    }
    getMyProfile();
  }, [user]);

  function displayCreate() {
    setShowCreate(true);
  }

  return (
    <div className={styles.background}>
      {user.username === "admin" ? (
        <div>
          <Button variant="Dark" onClick={displayCreate}>
            Create A new Product
          </Button>
          {showCreate === true ? <CreateProduct /> : null}
        </div>
      ) : null}
      <div>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log("Profile: ", user);
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
          <div className={styles.header}>
            <h1>My Profile</h1>
          </div>
          <Form.Group className={styles.log}>
            <h3>View & Edit Profile</h3>

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
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              value={firstname}
              type="text"
              placeholder={user.firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              placeholder="Please Enter a New Password"
              onChange={(e) => {
                setPassword(e.target.value);
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
                setPhoneNumber(+e.target.value);
              }}
            />
            <Button variant="dark" type="submit">
              Update
            </Button>
          </Form.Group>
        </Form>
      </div>

      <div className={styles.buttons}>
        {user.username !== "admin" ? (
          <div className={styles.buttons}>
            <WalletCard />
            <Button
              variant="dark"
              onClick={() => {
                navigate(`/myProfile/myOrders`);
              }}
            >
              <h5 classname={styles.order}> View Orders</h5>
            </Button>
            <Button
              variant="dark"
              onClick={() => {
                navigate(`/Cart`);
              }}
            >
              <h5 classname={styles.order}> View Cart</h5>
            </Button>
            <Button
              variant="dark"
              onClick={async () => {
                localStorage.removeItem("user");
                await logoutUser();
                navigate("/user/login");
              }}
            >
              <h5 classname={styles.order}> Logout</h5>
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
