import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUsers from "../hooks/useUsers";
import { fetchAllUsers } from "../api/users";
import CreateProduct from "./CreateProduct";

import styles from "../styles/Profile.module.css";

export default function AdminPage() {
  const { user } = useUsers();
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    async function getAllUsers() {
      const items = await fetchAllUsers();
      console.log("item", items);
      setProfiles(items);
    }
    getAllUsers();
    console.log("Profiles: ", profiles);
  }, []);

  function displayCreate() {
    setShowCreate(true);
  }

  return (
    <div className={styles.log}>
      <h1>Profiles</h1>
      {profiles?.map((profile) => {
        return (
          <div key={profile.id} className={styles.card}>
            <h6>
              Name: {profile.firstname} {profile.lastname}
            </h6>
            <h6>Username: {profile.username}</h6>
            <h6>Email Address: {profile.email}</h6>
            <h6>Phone Number: {profile.phoneNumber}</h6>
          </div>
        );
      })}

      <div>
        <div>
          <button onClick={displayCreate}>Create A new Product</button>
          {showCreate === true ? <CreateProduct /> : null}
        </div>

        <div className={styles.container}>
          <h3>User Information</h3>
          {profiles?.map((profile) => {
            return (
              <Card
                key={profile.id}
                style={{ width: "30rem" }}
                className={styles.card}
              >
                <h6>
                  Name: {profile.firstname} {profile.lastname}
                </h6>
                <h6>Username: {profile.username}</h6>
                <h6>Email Address: {profile.email}</h6>
                <h6>Phone Number: {profile.phoneNumber}</h6>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
