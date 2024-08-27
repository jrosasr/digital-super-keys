import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tags = [
  { name: "Windows" },
  { name: "Mac" },
  { name: "Linux" },
  { name: "Office" },
  { name: "OEM" },
  { name: "Licencias" },
];

const categories = [{ name: "Ofimática" }];

const publicationStatus = [{ name: "Disponible" }, { name: "Agotado" }];

const products = [
  {
    name: "Windows 10 Pro OEM",
    slug: "windows-10-pro-oem",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
  {
    name: "Windows 11 Home",
    slug: "windows-11-home",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
  {
    name: "Windows 11 Pro",
    slug: "windows-11-pro",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
  {
    name: "Windows 7 Pro",
    slug: "windows-7-pro",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
  {
    name: "Windows 8 Pro",
    slug: "windows-8-pro",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
  {
    name: "Windows 8.1 Pro",
    slug: "windows-8.1-pro",
    description:
      "A professional-grade Windows license for pre-installed on new PCs.",
    cost: 5.49,
    price: 9.99,
    discount_price: 7.49,
    stock: 50,
    image:
      "https://www.licencedeals.com/cdn/shop/products/Windows-11-Home-32bit-64bit-download-digital-licence_700x700.png?v=1635340826",
    categoryId: 1,
    statusId: 1,
  },
];

async function main() {
  console.log("init tags");
  await updateOrCreate({
    records: tags,
    model: prisma.tag,
    modelName: "Tag",
    fieldFind: "id",
  });

  console.log("init categories");
  await updateOrCreate({
    records: categories,
    model: prisma.category,
    modelName: "Category",
    fieldFind: "id",
  });

  console.log("init publicationStatus");
  await updateOrCreate({
    records: publicationStatus,
    model: prisma.publicationStatus,
    modelName: "PublicationStatus",
    fieldFind: "id",
  });

  console.log("init products");
  await updateOrCreate({
    records: products,
    model: prisma.product,
    modelName: "Products",
    fieldFind: "slug",
  });

  console.log("All seeded successfully");
}

async function updateOrCreate(props: {
  records: any;
  model: any;
  modelName: string;
  fieldFind: string;
}) {
  const { records, model, modelName, fieldFind } = props;

  for (const recData of records) {
    const existingRec = await model.findFirst({
      where: { name: recData.name },
    });

    if (existingRec) {
      console.log(fieldFind);

      const filter = { [fieldFind]: existingRec[fieldFind] };
      // Actualizar el record existente
      await model.update({
        where: { ...filter },
        data: recData,
      });
      console.log(`${modelName} ${recData.name} actualizado`);
    } else {
      // Crear un nuevo record
      await model.create({
        data: recData,
      });
      console.log(`${modelName} ${recData.name} creado`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
