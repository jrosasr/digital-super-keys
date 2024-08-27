"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: Number;
  name: String;
  slug: String;
  description: String;
  cost: Number;
  price: Number;
  discount_price: Number;
  stock: Number;
  image: String;
  categoryId: Number;
  statusId: Number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => {
      return (
        <Image
          alt={`imagen de ${row.original.name}`}
          width={32}
          height={32}
          src={row.original.image as string}
          className="rounded-full w-12 h-12"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "cost",
    header: "Costo",
    cell: ({ row }) => {
      return `$${row.original.cost}`;
    },
  },
  {
    accessorKey: "price",
    header: "Precio",
    cell: ({ row }) => {
      return `$${row.original.price}`;
    },
  },
  {
    accessorKey: "discount_price",
    header: "Precio de descuento",
    cell: ({ row }) => {
      return `$${row.original.discount_price}`;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
];
