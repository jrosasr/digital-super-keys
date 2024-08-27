import { Product } from "@prisma/client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { db } from "@/lib/db";
import { useState } from "react";

export default async function ProductsPage() {
  const list: any[] = [];
  const products = await db.product.findMany();
  // console.log(products);

  products.forEach((element) => {
    console.log(element);
    list.push({
      id: element.id,
      name: element.name,
      slug: element.slug,
      description: element.description,
      cost: element.cost,
      price: element.price,
      discount_price: element.discount_price,
      stock: element.stock,
      image: element.image,
      categoryId: element.categoryId,
      statusId: element.statusId,
    });
  });

  return (
    <div>
      <h1 className="pb-8 text-2xl">Productos</h1>
      <DataTable columns={columns} data={list} />
    </div>
  );
}
