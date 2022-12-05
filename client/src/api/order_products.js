export async function removeItemFromCart(orderId, productId) {
  const response = await fetch(`/api/order_products/${orderId}/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function addToCart(orderId, productId) {
  try {
    const response = await fetch(
      `/api/order_products/${orderId}/${productId}`,
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
