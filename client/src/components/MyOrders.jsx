import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useUsers from "../hooks/useUsers";

import {
  fetchAllOrders,
  fetchOrderById,
  fetchProductByOrderId,
} from "../api/orders";

import { fetchMyOrders } from "../api/users";

export default function MyOrders() {
  const { orderId } = useParams();
  const { user } = useUsers();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      const items = await fetchMyOrders();
      setOrders(items);
    }
    getAllOrders();
  }, []);
  console.log("Order:", orders);
  return (
    <div>
      {orders.map((order) => {
        return order.order_products.map((op) => {
          return (
            <div key={op.products.id}>
              <img src={op.products.imageUrl} alt="Product" />
              <h3>{op.products.productName}</h3>
              <h6>{op.products.description}</h6>
              <h6>Price: {op.products.price}</h6>
            </div>
          );
        });
      })}
    </div>
  );
}
