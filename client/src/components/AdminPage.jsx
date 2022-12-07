import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useUsers from "../hooks/useUsers";
import { fetchAllUsers } from "../api/users";

import styles from "../styles/Register.module.css";
import Card from "react-bootstrap/Card";

export default function AdminPage() {
  const { user } = useUsers();
  const [profiles, setProfiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllUsers() {
      const items = await fetchAllUsers();
      console.log("item", items);
      setProfiles(items);
    }
    getAllUsers();
    console.log("Profiles: ", profiles);
  }, []);

  return (
    <div className={styles.container}>
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
  );
}
