const users = [
  {
    email: "ironman1@mail.com",
    password: "money",
    username: "ironman1",
    firstname: "iron",
    lastname: "man",
    phoneNumber: "111-111-1111",
  },

  {
    email: "spiderman2@mail.com",
    password: "webs",
    username: "spiderman2",
    firstname: "spider",
    lastname: "man",
    phoneNumber: "222-222-2222",
  },

  {
    email: "captainamerica3@mail.com",
    password: "sheild",
    username: "captainamerica3",
    firstname: "captain",
    lastname: "america",
    phoneNumber: "333-333-3333",
  },

  {
    email: "doctorstrange4@mail.com",
    password: "wizard",
    username: "doctorstrange4",
    firstname: "doctor",
    lastname: "strange",
    phoneNumber: "444-444-4444",
  },
];

const orders = [
  {
    orderNumber: 001,
    orderStatus: "RECIEVED",
    isCart: false,
    userId: 1,
  },
];

const products = [
  {
    productName: "Avengers NFT 1",
    description: "A rare NFT from the first avengers movie!",
    price: 500,
    isAvailable: true,
    imageURL: "https//www.google.com",
    categoryId: 01,
  },
];

const order_products = [
  {
    productId: 12345,
    orderId: 001,
  },
];

const categories = [
  {
    name: "Anime",
    description: "An anime inspired NFT for the avengers!",
    imageURL: "https//www.google.com",
  },
];

module.exports = { users, orders, products, order_products, categories };
