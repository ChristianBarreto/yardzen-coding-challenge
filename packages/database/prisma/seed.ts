import { PrismaClient, ProductType } from "../src/generated/client";

const prisma = new PrismaClient();

const products = [
  {
    name: "Teak Garden Bench",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 299.99,
    type: ProductType.furniture,
  },
  {
    name: "Ceramic Plant Pot - Large",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 45.99,
    type: ProductType.planter,
  },
  {
    name: "Japanese Maple Tree",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 89.99,
    type: ProductType.plant,
  },
  {
    name: "Solar Path Lights (Set of 6)",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 79.99,
    type: ProductType.lighting,
  },
  {
    name: "Weather-Resistant Outdoor Rug",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 129.99,
    type: ProductType.decor,
  },
  {
    name: "Stone Fire Pit",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 249.99,
    type: ProductType.feature,
  },
  {
    name: "Adirondack Chair",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 159.99,
    type: ProductType.furniture,
  },
  {
    name: "Herb Garden Starter Kit",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 34.99,
    type: ProductType.plant,
  },
  {
    name: "Outdoor String Lights",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 49.99,
    type: ProductType.lighting,
  },
  {
    name: "Bamboo Privacy Screen",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXEYcyu5qH2MfqlLG6WQLynkjvsunsgBqA&s",
    price: 189.99,
    type: ProductType.feature,
  },
];

async function main() {
  console.log("Start seeding...");

  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${createdProduct.name}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
