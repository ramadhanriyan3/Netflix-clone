import bcrypt from "bcrypt";
import prismadb from "../../../../lib/prismadb";

export async function POST(req: Request) {
  const data = await req.formData();
  const email = data.get("email")?.toString();
  const password = data.get("password")!.toString();

  try {
    const user = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return new Response("not found", {
        status: 404,
      });
    }

    const isVerified = await bcrypt.compare(password, user!.hashedPassword!);
    if (isVerified) {
      return new Response("Success!", {
        status: 200,
      });
    } else {
      return new Response("Incorrect password", {
        status: 401,
      });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
