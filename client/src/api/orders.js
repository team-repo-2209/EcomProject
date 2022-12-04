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
