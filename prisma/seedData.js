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
    isCompleted: false,
    isCart: false,
    userId: 1,
  },
];

const categories = [
  {
    name: "Anime",
    description: "An anime inspired NFT for the Avengers!",
  },
  {
    name: "Cartoon",
    description: "A cartoon inspired NFT for the Avengers!",
  },
  {
    name: "Live Action",
    description: "A live action inspired NFT for the Avengers!",
  },
];

const products = [
  {
    productName: "Anime Spider-man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673370/Anime%20/6-60192_venom-poster-digital-art-miles-morales-spider-man_quskat.jpg",
    categoryId: 01,
  },
  {
    productName: "Anime Black Widow NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673312/Anime%20/802c6abbdfb5e8d4541a4161a24cf71a_pzd0zz.jpg",
    categoryId: 01,
  },
  {
    productName: "Anime Thor NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673244/Anime%20/HD-wallpaper-thor-anime-god-of-thunder-infinity-war-new-anime-the-avengers_pjftiv.jpg",
    categoryId: 01,
  },
  {
    productName: "Anime Doctor Strange NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673154/Anime%20/doctor-strange-fairy-tail_ozjwzb.webp",
    categoryId: 01,
  },
  {
    productName: "Anime Iron Man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673011/Anime%20/i-am-iron-man_1_crbocf.webp",
    categoryId: 01,
  },
  {
    productName: "Cartoon Spider-man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673877/Cartoon/70535eefd00556de72bb3baa1341e274_niirlk.jpg",
    categoryId: 02,
  },
  {
    productName: "Cartoon Black Widow NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673801/Cartoon/cda9da5a35e39cb13496cd52267c9d06_lvhag3.jpg",
    categoryId: 02,
  },
  {
    productName: "Cartoon Thor NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673732/Cartoon/drawn-cartoon-Thor-with-a-hammer_bj9nv3.jpg",
    categoryId: 02,
  },
  {
    productName: "Cartoon Doctor Strange NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673685/Cartoon/e2e186827b58c1ed97961629d6d92ce2_zf7ouu.jpg",
    categoryId: 02,
  },
  {
    productName: "Cartoon Iron Man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673627/Cartoon/11189bce30bcb47fcf1e9dba3e78ca27_xkdivq.jpg",
    categoryId: 02,
  },
  {
    productName: "Live Action Spider-man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669674058/Live%20Action/AMC_Scene_PromoPost_Spidey-IMAX_s6vfgv.jpg",
    categoryId: 03,
  },
  {
    productName: "Live Action Black Widow NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669674113/Live%20Action/black-widow-16_he1dnt.jpg",
    categoryId: 03,
  },
  {
    productName: "Live Action Thor NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669674183/Live%20Action/Thor-Ragnarok-Review_ezckif.webp",
    categoryId: 03,
  },
  {
    productName: "Live Action Doctor Strange NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669674295/Live%20Action/wp7855728_uw5cwb.jpg",
    categoryId: 03,
  },
  {
    productName: "Live Action Iron Man NFT",
    description: "A rare NFT!",
    price: 500,
    isAvailable: true,
    imageUrl:
      "https://res.cloudinary.com/dk7bvkdnm/image/upload/v1669673995/Live%20Action/iron-Man_ooc3pf.webp",
    categoryId: 03,
  },
];

const order_products = [
  {
    productId: 1,
    orderId: 1,
  },
  {
    productId: 2,
    orderId: 1,
  },
];

module.exports = { users, orders, products, order_products, categories };
