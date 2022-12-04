import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useUsers from "../hooks/useUsers";
import { fetchOrdersByUserId } from "../api/orders";

export default function MyOrders() {
  const { user } = useUsers();
  const { userId } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getMyOrders() {
      if (user) console.log("My Order: ", user);
    }
  }, [user]);
}
