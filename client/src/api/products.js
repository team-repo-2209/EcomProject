export async function fetchProducts() {

  const response = await fetch("/api/products");
  const result = await response.json();
  return result;
}

export async function fetchProductById(id) {
  const response = await fetch(`/api/products/${id}`);
  const result = await response.jon();
  return result;
}

export async function updateProduct(
  id,
  productName,
  description,
  price,
  isAvailable,
  imageUrl,
  categoryId
) {
  const response = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      productName,
      description,
      price,
      isAvailable,
      imageUrl,
      categoryId,
    }),
  });
  const result = await response.json();
  return result;
}

export async function createProduct(
  productName,
  description,
  price,
  isAvailable,
  imageUrl,
  categoryId
) {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        productName,
        description,
        price,
        isAvailable,
        imageUrl,
        categoryId,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id) {
  const response = await fetch(`/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}
