// import styles from "../styles/Cart.module.css";
// import { fetchOrderById } from "../api/orders";
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function Cart() {
//   const navigate = useNavigate();
//   const { orderId } = useParams();
//   const [order, setOrder] = useState({});

//   useEffect(() => {
//     async function getOrder() {
//       const info = await fetchOrderById(orderId);
//       setOrder(info);
//     }
//     getOrder();
//   }, []);

//   return (
//     <div>
//       <div>
//         <h2>Cart</h2>
//       </div>
//       {order?.map((products) => {
//         return (
//           <div key={products.id}>
//             <h6>{products.productName}</h6>
//             <h6>${products.price}</h6>
//           </div>
//         );
//       })}

//       <div>
//         <h2>Cart Total:</h2>
//       </div>
//       <button>Continue Shopping</button>
//       <button>Continue to Checkout</button>
//     </div>
//   );
// }
