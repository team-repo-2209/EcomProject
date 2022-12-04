export async function fetchOrderById(id) {
  const response = await fetch(`/api/orders/${id}`);
  const result = await response.json();
  return result;
}

export async function fetchOrdersByUserId(userId) {
  try {
    const response = await fetch(`/api/orders/user/${userId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
