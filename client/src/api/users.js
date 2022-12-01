export async function fetchMe() {
  const response = await fetch("/api/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function logoutUser() {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
}

export async function updateUser(
  id,
  email,
  password,
  firstname,
  lastname,
  phoneNumber
) {
  const response = await fetch(`/api/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      firstname,
      lastname,
      phoneNumber,
    }),
  });
  const result = await response.json();
  return result;
}
