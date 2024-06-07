import bcrypt from "bcrypt";
import prismadb from "../../../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const email = data.get("email")?.toString();
    const name = data.get("name")!.toString();
    const password = data.get("password")!.toString();

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse(JSON.stringify({ message: "Email taken" }), {
        status: 422,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    return console.log(err);
  }
}
