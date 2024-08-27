import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      name,
      description,
      cost,
      price,
      discount_price,
      stock,
      image,
      categoryId,
      statusId,
    } = await req.json();

    if (
      !name ||
      !description ||
      !cost ||
      !price ||
      !discount_price ||
      !stock ||
      !image ||
      !categoryId ||
      !statusId
    ) {
      return new NextResponse("Fields are required", {
        status: 422,
      });
    }
    const element = await db.product.create({
      data: {
        name,
        slug: name.toLowerCase().replace(/ /g, "-"),
        description,
        cost,
        price,
        discount_price,
        stock,
        image,
        categoryId,
        statusId,
      },
    });

    return NextResponse.json(element);
  } catch (error) {
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}

export async function GET() {
  const products = await db.product.findMany();
  return NextResponse.json(products);
}
