import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useUsers from "../hooks/useUsers";
import {
  fetchAllOrders,
  fetchOrderById,
  fetchProductByOrderId,
} from "../api/orders";

export default function MyOrders() {
  const { orderId } = useParams();
  const { user } = useUsers();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getAllOrders() {
      const items = await fetchAllOrders();
      setOrders(items);
    }
    getAllOrders();
  }, []);

  return (
    <div key={orders.id}>
      {orders?.map((order) => {
        if (order.userId === user.id) {
          return (
            <div key={order.id}>
              <h6>ID: {order.userId}</h6>

              {/* {order
                ? products.map((product) => {
                    console.log(product.userId);

                    return <h6>ID: {product.productName}</h6>;
                  })
                : null} */}
            </div>
          );
        }
      })}
      <div></div>
    </div>
  );
}
