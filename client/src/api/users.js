export async function fetchMe() {
  const response = await fetch("/api/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result);
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
  console.log("update users");
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

export async function registerUser(
  email,
  username,
  password,
  firstname,
  lastname,
  phoneNumber
) {
  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        firstname,
        lastname,
        phoneNumber,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(username, password) {
  console.log(username, password);
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
