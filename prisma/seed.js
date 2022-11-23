const prisma = require("./prisma");

const {
  users,
  orders,
  products,
  order_products,
  categories,
} = require("./seedData");

const seedDb = async () => {
  console.log("creating users...");
  await Promise.all(
    users.map(async (user) => {
      return prisma.users.create({
        data: user,
      });
    })
  );

  console.log("creating orders...");
  await Promise.all(
    orders.map(async (order) => {
      return prisma.orders.create({
        data: order,
      });
    })
  );
  console.log("creating categories...");
  await Promise.all(
    categories.map(async (category) => {
      return prisma.categories.create({
        data: category,
      });
    })
  );
  console.log("creating products...");
  await Promise.all(
    products.map(async (product) => {
      return prisma.products.create({
        data: product,
      });
    })
  );

  console.log("creating order_products...");
  await Promise.all(
    order_products.map(async (order_product) => {
      return prisma.Order_Products.create({
        data: order_product,
      });
    })
  );
};

const initDb = async () => {
  try {
    await seedDb();
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

initDb();
