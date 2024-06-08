import { NextResponse } from "next/server";
import { getUserSession } from "../../../lib/userSession";
import prismadb from "../../../lib/prismadb";

export async function GET() {
  const sessionUser = await getUserSession();
  const email = sessionUser?.email;
  if (!email) {
    return new NextResponse(JSON.stringify({ message: "unathorize" }), {
      status: 401,
    });
  }

  try {
    const currentUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    return Response.json(currentUser);
  } catch (err) {
    return console.log(err);
  }
}
