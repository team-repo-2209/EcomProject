export async function fetchOrderById(id) {
  const response = await fetch(`/api/orders/${id}`);
  const result = await response.json();
  return result;
}

export async function fetchAllOrders() {
  const response = await fetch(`/api/orders/`);
  const result = await response.json();
  return result;
}

export async function updateCart(isCart) {
  const response = await fetch(`/api/orders`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      isCart,
    }),
  });
  const result = await response.json();
  return result;
}
